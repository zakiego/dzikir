import Head from "next/head";
import { FC } from "react";
import { Favicon } from "~/src/components/favicon";
import { Meta } from "~/src/components/meta";

interface Props {
  title: string;
}

export const Header: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <Favicon />
      <Meta />
    </Head>
  );
};
