import {useState, useEffect} from "react";
const useFetch = (url, waitMs = 0) => {
    const [data, setData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {
                signal: abortCont.signal,
            })
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
					if (error.name === "AbortError"){
						return;
					}
                    console.log(error);
					
                    setErrorLoading(true);
                    setDataLoaded(false);
                });
        }, waitMs);
        return () => {
            abortCont.abort();
        };
    }, [url, waitMs]);

    return {data, dataLoaded, errorLoading};
};

export default useFetch;
