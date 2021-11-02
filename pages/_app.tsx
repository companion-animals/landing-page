import "src/styles/globals.css";
import type { AppProps } from "next/app";

import GTM from "src/components/head/GTM";
import LazyloadCSS from "src/components/head/LazyLoadCSS";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GTM />
    <LazyloadCSS href="/xeicon/xeicon.min.css" />
    <LazyloadCSS href="/styles/SpoqaHanSansNeo.css" />
    <Component {...pageProps} />
  </>
);
export default CustomApp;
