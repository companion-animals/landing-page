import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ToastContainer } from "react-toastify";

import GTM from "src/components/head/GTM";
import LazyloadCSS from "src/components/head/LazyLoadCSS";
import SEOAndOG from "src/components/head/SEOAndOG";
import { isProduction } from "src/utils/env";
import "react-toastify/dist/ReactToastify.css";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1, user-scalable=no"
      />
    </Head>
    <SEOAndOG allowSearchIndex={isProduction} />
    <GTM />
    <LazyloadCSS href="/xeicon/xeicon.min.css" />
    <LazyloadCSS href="/styles/AppleSDGothicNeo.css" />
    <Component {...pageProps} />
    <ToastContainer />
  </>
);
export default CustomApp;
