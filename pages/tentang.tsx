import Header from "../components/header";
import Footer from "../components/footer";
import compare from "../components/compare";
import { Navbar } from "~/components/navbar";

export async function getStaticProps() {
  const res = await fetch(`https://api.zakiego.my.id/api/dzikir/v1/getDzikir`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function Tentang(props) {
  const titlePage = "Tentang";

  const {
    data: {
      data: { sumber },
    },
  } = props;

  sumber.sort(compare);

  const renderSumber = sumber.map((sumber) => {
    return (
      <div key={sumber.id}>
        {sumber.id}
        {". "}
        {sumber.link}
      </div>
    );
  });

  return (
    <div className="min-h-screen">
      <Header title={titlePage} />
      <div className="relative ">
        <div className="min-h-screen max-w-6xl mx-auto">
          <main className="relative pt-12 pb-10 px-5">
            <Navbar title={titlePage} />
            <div name="sumber section" className="px-7 md:px-[60px] pt-14">
              <div className="mb-3">Sumber :</div>
              <div className="text-xs md:text-base leading-relaxed space-y-1">
                {renderSumber}
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
