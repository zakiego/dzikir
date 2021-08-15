import Head from "next/head";
import Favicon from "./favicon";
import Meta from "./meta";

export default function Header(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<Favicon />
			<Meta />
		</Head>
	);
}
