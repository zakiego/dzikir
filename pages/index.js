/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useRouter } from "next/router";

function Page() {
	const newDate = new Date();
	const getHour = newDate.getHours();
	const category = getHour < 12 ? "/dzikir-pagi" : "/dzikir-sore";
	const router = useRouter();

	useEffect(() => router.push(category));

	// let circleCommonClasses = "h-3 w-3 bg-current bg-green-500 rounded-full";

	// <div className="flex  min-h-screen justify-center items-center space-x-3">
	// 	<div className={`${circleCommonClasses}  animate-bounce`} />
	// 	<div className={`${circleCommonClasses} animate-bounce200`} />
	// 	<div className={`${circleCommonClasses} animate-bounce400`} />
	// </div>
	return <></>;
}

export default Page;
