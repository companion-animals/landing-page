import Head from "next/head";

interface Props {
  allowSearchIndex: boolean;
}

const SITE_NAME = "우리동네 특별반";
const TITLE = `${SITE_NAME} - 특수동물을 위한 호텔링/ 펫시터 서비스`;
const DESCRIPTION =
  "햄스터, 게코, 앵무새, 기니피그, 거북이 등등.. 특수동물 맡길 곳 찾기 어려우셨죠? 이제는 우리동네 특별반에 안심하고 맡기세요!";

const SEO = ({ allowSearchIndex }: Props) => (
  <Head>
    <title key="title">{TITLE}</title>
    <meta key="meta:description" name="description" content={DESCRIPTION} />
    <meta key="og:title" property="og:title" content={TITLE} />
    <meta key="og:description" name="og:description" content={DESCRIPTION} />
    <meta key="og:type" name="og:type" content="website" />
    <meta key="og:site_name" name="og:site_name" content={SITE_NAME} />
    <meta
      property="og:image"
      content="/images/specialban_og_image"
      key="og:image"
    />
    {allowSearchIndex && (
      <meta name="robots" content="noindex" key="blockCrawl" />
    )}
  </Head>
);

export default SEO;
