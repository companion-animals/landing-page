import "src/styles/globals.css";
import type { AppProps } from "next/app";

import LazyloadCSS from "src/components/head/LazyLoadCSS";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <LazyloadCSS href="/xeicon/xeicon.min.css" />
    <LazyloadCSS href="/styles/AppleSDGothicNeo.css" />
    <Component {...pageProps} />
  </>
);
export default CustomApp;
