import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="selection:text-nord-200 selection:bg-nord-900 font-ubuntu">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
