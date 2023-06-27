import { PageLayout } from "~/src/components/Layout/Page";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import { z } from "zod";
import { keystaticReader } from "~/src/utils/keystatic";

export async function getStaticProps() {
  const schema = z.object({
    title: z.string(),
    api: z.array(
      z.object({
        label: z.string(),
        url: z.string().optional(),
      }),
    ),
  });

  const { title, api } = schema.parse(
    await keystaticReader.singletons.api.read(),
  );

  return {
    props: { title, api },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Tentang: FC<Props> = ({ title, api }) => {
  return (
    <PageLayout title={title}>
      <div className="px-8 md:px-16">
        <div className="pb-4 font-semibold">
          <p>API</p>
        </div>
        <ol className="list-decimal">
          {api.map((item, index) => {
            const padding = index === 0 ? "pt-0" : "pt-4";

            return (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className={`${padding} ml-4  `}>
                  <div>{item.label}</div>
                  <div className="py-2">
                    <code className="text-sm bg-zinc-700 text-neutral-100 hover:text-teal-500 py-2 px-2 rounded-md">
                      {item.url}
                    </code>
                  </div>
                </li>
              </a>
            );
          })}
        </ol>
      </div>
    </PageLayout>
  );
};

export default Tentang;
