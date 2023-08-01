import { useState, useEffect } from "react";

export function useFetch(element, url) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setError(false);

        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
            } catch (error) {
                setError(true);

                if (!url) {
                    console.log(`${element} useFetch error: url attendue !`);
                } else {
                    console.log(`${element} fetch error: `, error);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()
    }, [url, element]);

    return {data, isLoading, error};
}
