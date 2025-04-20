import { useEffect, useState } from "react";
import { fetchData } from "../utils/dummyApi";

export const useFetchData = (start, end, timezone) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(start, end, timezone).then(setData);
  }, [start, end, timezone]);

  return data;
};
