/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useRouter } from "next/router";

function Page() {
	const router = useRouter();
	const newDate = new Date();
	const getHour = newDate.getHours();

	const handleClick = () => {
		useEffect(() => {
			if (getHour < 12) {
				router.push("/dzikir-pagi");
			} else {
				router.push("/dzikir-sore");
			}
		}, []);
	};

	return <>{handleClick()}</>;
}

export default Page;
