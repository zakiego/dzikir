import { PageLayout } from "~/src/components/Layout/Page";
import { keystaticReader, keystaticSchema } from "~/src/utils/keystatic";
import { InferGetStaticPropsType } from "next";
import { FC, useState } from "react";
import { CheckIcon, FaidahIcon } from "~/src/components/Icon";

export async function getStaticProps() {
  const { title, description, dzikir } = keystaticSchema.dzikir.parse(
    await keystaticReader.singletons.dzikirSore.read(),
  );

  return {
    props: { title, description, dzikir },
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const DzikirPagi: FC<Props> = ({ title, description, dzikir }) => {
  return (
    <PageLayout
      title={title}
      backgroundBlurColor="#E4C1CE"
      gradient={{
        from: "#f5ceab",
        to: "#FFBA7A",
      }}
    >
      {dzikir.map((item, index) => (
        <DzikirCard key={index} item={item} index={index} />
      ))}
    </PageLayout>
  );
};

export default DzikirPagi;

const DzikirCard = ({
  item,
  index,
  ...props
}: {
  item: any;
  index: number;
}) => {
  const [showBenefit, setShowBenefit] = useState(false); // eslint-disable-line

  return (
    <div key={`dzikir-${index}`} {...props}>
      <div className="bg-card-sore pt-8 pb-12 px-8 md:px-16 rounded-[30px] shadow-tipis">
        <div className="flex justify-end">
          <button
            onClick={() => setShowBenefit(!showBenefit)}
            className="flex flex-row mt-4 items-center space-x-1 md:space-x-2 outline-none hover:scale-110 hover:transition-all duration-500"
          >
            <FaidahIcon className="text-[#E39954]" />
            <div className="text-senja text-xs md:text-base font-semibold">
              Faidah
            </div>
          </button>
        </div>

        {!showBenefit && (
          <div>
            <div className="flex justify-end">
              <div className="font-semibold mt-4 px-3 py-1 text-xs md:text-base bg-senja text-white rounded-md">
                {item.read}
              </div>
            </div>
            <div
              dir="rtl"
              className="pt-5 font-hafs text-3xl md:text-5xl leading-relaxed md:leading-loose"
            >
              {item.arabic}
            </div>
            <div className="text-sm md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide">
              {item.translation}
            </div>
            <div className="flex flex-inline items-center pt-4 space-x-2 text-xs md:text-base">
              <p className="opacity-70">{item.source}</p>
              <CheckIcon className="text-[#E39954]" />
            </div>
          </div>
        )}

        {showBenefit && (
          <div>
            <div className="flex flex-inline items-center pt-4 space-x-2 text-xs md:text-base">
              <p className="opacity-70">{item.source}</p>
              <CheckIcon className="text-[#E39954]" />
            </div>
            <div className="text-sm md:text-lg mt-6 leading-5 md:leading-relaxed font-normal tracking-wide">
              {item.benefit}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
