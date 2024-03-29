import "src/styles/globals.css";
import { useEffect, useState } from "react";

import { AppProps } from "next/app";
import Head from "next/head";

import { ToastContainer, toast } from "react-toastify";

import GTM from "src/components/head/GTM";
import LazyloadCSS from "src/components/head/LazyLoadCSS";
import SEOAndOG from "src/components/head/SEOAndOG";
import { initialLoginCheck } from "src/controller/authController";
import { LoginContext } from "src/hooks/useLogin";
import { isProduction } from "src/utils/env";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  isLogin: boolean;
}

const CustomApp = ({ Component, pageProps }: AppProps<Props>) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      const { message, isLogin } = await initialLoginCheck();
      if (message) {
        toast.error(message);
      }
      setIsLogin(!!isLogin);
    };

    checkLogin();
  }, []);

  return (
    <LoginContext.Provider value={isLogin}>
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
    </LoginContext.Provider>
  );
};

export default CustomApp;
