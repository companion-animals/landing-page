import { useMemo } from "react";

import { useRouter } from "next/router";

export default function useURLQuery() {
  const router = useRouter();

  const query = useMemo(() => {
    const splited = router.asPath.split("?");
    if (splited.length === 1) {
      return {};
    }
    if (splited[1].indexOf("=") === -1) {
      return {};
    }

    const jsonString = `{"${splited[1]
      .replace(/&/g, '","')
      .replace(/=/g, '":"')}"}`;

    const result = JSON.parse(jsonString, (key, value) =>
      key === "" ? value : decodeURIComponent(value),
    ) as { [key: string]: string };

    return result;
  }, [router.asPath]);

  return query;
}
