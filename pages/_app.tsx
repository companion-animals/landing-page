import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import LazyloadCSS from "src/components/head/LazyLoadCSS";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1, user-scalable=no"
      />
    </Head>
    <LazyloadCSS href="/xeicon/xeicon.min.css" />
    <LazyloadCSS href="/styles/AppleSDGothicNeo.css" />
    <Component {...pageProps} />
  </>
);
export default CustomApp;
