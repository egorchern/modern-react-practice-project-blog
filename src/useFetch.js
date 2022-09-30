import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Cant fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setDataLoaded(true);
        setErrorLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorLoading(true);
        setDataLoaded(false);
      });

  }, [url]);

  return { data, dataLoaded, errorLoading }
};

export default useFetch;