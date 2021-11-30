import Head from "next/head";

interface Props {
  allowSearchIndex: boolean;
}

const SITE_NAME = "우리동네 특별반";
const TITLE = `${SITE_NAME} - 특수동물을 위한 호텔링/ 펫시터 서비스`;
const DESCRIPTION =
  "햄스터, 게코, 앵무새, 기니피그, 거북이 등등.. 특수동물 맡길 곳 찾기 어려우셨죠? 이제는 우리동네 특별반에 안심하고 맡기세요!";
const URL = "www.specialban.com";

const SEO = ({ allowSearchIndex }: Props) => (
  <Head>
    <title key="title">{TITLE}</title>
    <meta key="meta:description" name="description" content={DESCRIPTION} />
    <meta key="og:title" property="og:title" content={TITLE} />
    <meta
      key="og:description"
      property="og:description"
      content={DESCRIPTION}
    />
    <meta key="og:type" property="og:type" content="website" />
    <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
    <meta key="og:url" property="og:url" content={URL} />
    <meta
      property="og:image"
      content="/images/specialban_og_image.png"
      key="og:image"
    />
		<link rel="canonical" href="https://www.specialban.com">
    {!allowSearchIndex && (
      <meta name="robots" content="noindex" key="blockCrawl" />
    )}
  </Head>
);

export default SEO;
