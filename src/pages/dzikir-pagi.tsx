import { PageLayout } from "~/src/components/Layout/Page";
import { FC, useState } from "react";
import { keystaticReader, keystaticSchema } from "~/src/utils/keystatic";
import { InferGetStaticPropsType } from "next";
import { CheckIcon, FaidahIcon } from "~/src/components/Icon";

export async function getStaticProps() {
  const { title, description, dzikir } = keystaticSchema.dzikir.parse(
    await keystaticReader.singletons.dzikirPagi.read(),
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
      backgroundBlurColor="#F9F4F4"
      pageType="dzikirPagi"
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
      <div className="bg-card-pagi pt-8 pb-12  px-8 md:px-16 rounded-[30px] shadow-tipis">
        <div className="flex justify-end">
          <button
            onClick={() => setShowBenefit(!showBenefit)}
            className="flex flex-row mt-4 items-center space-x-1 md:space-x-2 outline-none hover:scale-110 hover:transition-all duration-500"
          >
            <FaidahIcon className="text-[#6597AB]" />
            <div className="text-nord-200 text-xs md:text-base font-semibold">
              Faidah
            </div>
          </button>
        </div>

        {!showBenefit && (
          <div>
            <div className="flex justify-end">
              <div className="font-semibold mt-4 px-3 py-1 text-xs md:text-base bg-tosca text-white rounded-md">
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
              <CheckIcon className="text-[#6597AB]" />
            </div>
          </div>
        )}

        {showBenefit && (
          <div>
            <div className="flex flex-inline items-center pt-4 space-x-2 text-xs md:text-base">
              <p className="opacity-70">{item.source}</p>
              <CheckIcon className="text-[#6597AB]" />
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
