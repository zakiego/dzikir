import Head from "next/head";
import { Favicon } from "~/src/components/favicon";
import { Meta } from "~/src/components/meta";

export const Header = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <Favicon />
      <Meta />
    </Head>
  );
};
