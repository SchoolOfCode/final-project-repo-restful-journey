import { useEffect, useState } from "react";
export function useFetch(api) {
  const [data, setData] = useState(null);

  async function loadData() {
    const response = await fetch(api);
    const apiResponse = await response.json();
    setData(apiResponse);
  }

  useEffect(() => {
    loadData();
  }, [api]);

  return [data];
}
