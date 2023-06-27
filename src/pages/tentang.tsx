import { PageLayout } from "~/src/components/Layout/Page";
import { InferGetStaticPropsType } from "next";
import { FC } from "react";
import { z } from "zod";
import { keystaticReader } from "~/src/utils/keystatic";

export async function getStaticProps() {
  const schema = z.object({
    title: z.string(),
    source: z.array(
      z.object({
        label: z.string(),
        url: z.string().optional(),
      }),
    ),
  });

  const { title, source } = schema.parse(
    await keystaticReader.singletons.about.read(),
  );

  return {
    props: { title, source },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const Tentang: FC<Props> = ({ title, source }) => {
  return (
    <PageLayout
      title={title}
      gradient={{
        from: "#f5ceab",
        to: "#FFBA7A",
      }}
    >
      <div className="px-8 md:px-16">
        <div className="pb-4 font-semibold">
          <p>Sumber: </p>
        </div>
        <ol className="list-decimal">
          {source.map((s, index) => {
            const padding = index === 0 ? "pt-0" : "pt-4";

            if (s.url) {
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className={`${padding} ml-4  hover:text-teal-500`}>
                    {s.label}
                  </li>
                </a>
              );
            }

            return (
              <li key={s.label} className={`${padding} ml-4 `}>
                {s.label}
              </li>
            );
          })}
        </ol>
      </div>
    </PageLayout>
  );
};

export default Tentang;
