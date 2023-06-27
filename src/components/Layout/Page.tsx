import { FC } from "react";
import { match } from "ts-pattern";
import { BackgroundBlur } from "~/src/components/blur";
import { Footer } from "~/src/components/footer";
import { Header } from "~/src/components/header";
import { Navbar } from "~/src/components/navbar";

interface Props {
  title: string;
  children: React.ReactNode;
  backgroundBlurColor?: string;
  pageType?: "dzikirPagi" | "dzikirSore";
}

export const PageLayout: FC<Props> = ({
  title,
  children,
  backgroundBlurColor,
  pageType,
}) => {
  const gradient = match(pageType)
    .with("dzikirPagi", () => "from-[#E8F0FF] to-[#E5F5FF]")
    .with("dzikirSore", () => "from-[#F5CEAB] to-[#FFBA7A]")
    .otherwise(() => "");

  return (
    <div className={`min-h-screen bg-gradient-to-bl ${gradient}`}>
      <Header title={title} />
      <div className="relative ">
        {backgroundBlurColor && <BackgroundBlur color={backgroundBlurColor} />}
        <div className="min-h-screen max-w-6xl mx-auto">
          <main className="relative pt-12 pb-10 px-5">
            <Navbar title={title} />
            <div className="pt-14 space-y-8">{children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};
