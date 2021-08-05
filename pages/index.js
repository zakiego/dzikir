/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useRouter } from "next/router";

export function getServerSideProps() {
	const newDate = new Date();
	const getHour = newDate.getHours();
	const category = getHour < 12 ? "/dzikir-pagi" : "/dzikir-sore";

	return { props: { category } };
}

function Page(props) {
	const router = useRouter();

	const { category } = props;

	useEffect(() => router.push(category));

	let circleCommonClasses = "h-3 w-3 bg-current bg-green-500 rounded-full";

	return (
		<div className="flex  min-h-screen justify-center items-center space-x-3">
			<div className={`${circleCommonClasses}  animate-bounce`} />
			<div className={`${circleCommonClasses} animate-bounce200`} />
			<div className={`${circleCommonClasses} animate-bounce400`} />
		</div>
	);
}

export default Page;
