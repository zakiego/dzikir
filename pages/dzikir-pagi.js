export async function getServerSideProps() {
	const res = await fetch(`http://${process.env.URL}/api/public/v1/getDzikir`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data }, // will be passed to the page component as props
	};
}

export default function Home(props) {
	const jenisDzikir = "dzikir pagi";

	const {
		data: {
			data: { dzikir, sumber },
		},
	} = props;

	const filteredDzikir = dzikir.filter(function (el) {
		return el.category.includes(jenisDzikir);
	});

	const renderDzikir = filteredDzikir.map((dzikir) => {
		return (
			<li key={dzikir.id}>
				<p>{dzikir.arabic}</p>
				<p>{dzikir.arti}</p>
			</li>
		);
	});

	return (
		<div>
			<h1>Hai</h1>
			<div>{renderDzikir}</div>
		</div>
	);
}
