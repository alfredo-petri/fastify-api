import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState (null)
    useEffect (()=>{
        const fetchData = async ()=>{
            const res = await fetch (url)
            const dataRes = await res.json()
            setData (dataRes)
        }

        fetchData ()
    },[url]);

    return {data};
}
