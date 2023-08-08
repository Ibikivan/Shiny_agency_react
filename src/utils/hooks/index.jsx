import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/index";

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
                    console.log(`=== ${element} useFetch error ===: url attendue !`);
                } else {
                    console.log(`=== ${element} fetch error ===: `, error);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchData()
    }, [url, element]);

    return {data, isLoading, error};
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(AppContext);
    return { theme, toggleTheme };
}
