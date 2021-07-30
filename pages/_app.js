import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className=" selection:text-nord-200 selection:bg-nord-900">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
