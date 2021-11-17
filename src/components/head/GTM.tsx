/* eslint-disable jsx-a11y/iframe-has-title */

import Script from "next/script";

import { isProduction } from "src/utils/env";

const inlineScript = isProduction
  ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=ljs-MLY0ZULMGvsBcaKLPQ&gtm_preview=env-1&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-NK5PWSM');`
  : `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+ '&gtm_auth=8Fx7hLJhYp6PUoPHibcGMw&gtm_preview=env-3&gtm_cookies_win=x';f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NK5PWSM');`;
const iframeSource = isProduction
  ? "https://www.googletagmanager.com/ns.html?id=GTM-NK5PWSM&gtm_auth=ljs-MLY0ZULMGvsBcaKLPQ&gtm_preview=env-1&gtm_cookies_win=x"
  : "https://www.googletagmanager.com/ns.html?id=GTM-NK5PWSM&gtm_auth=8Fx7hLJhYp6PUoPHibcGMw&gtm_preview=env-3&gtm_cookies_win=x";

const IFRAME_STYLE = { display: "none", visibility: "hidden" };

const GTM = () => (
  <>
    <Script>{inlineScript}</Script>
    <noscript>
      <iframe src={iframeSource} height="0" width="0" style={IFRAME_STYLE} />
    </noscript>
  </>
);

export default GTM;
