import Head from "next/head";
import Favicon from "./favicon";

export default function Header(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<Favicon />
		</Head>
	);
}
