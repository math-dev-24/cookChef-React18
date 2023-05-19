import {useEffect, useState} from "react";


export function useFetchData(url, page){

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setEror] = useState(null)

    useEffect(() => {
        let cancel = false;
        async function fetchData(){
            try{
                page && page === 1 && setIsLoading(true)
                let queries = ''
                if(page){
                    queries += `?skip=${(page-1)*8}&limit=8&sort=createdAt:-1`
                }

                const response = await fetch(url + queries);

                if (response.ok && !cancel){
                    const newData = await response.json();
                    setData(x => Array.isArray(newData) ? [...x, ...newData] : [newData]);
                }

            }catch (e) {
                setEror('Erreur')
            }finally {
                !cancel && setIsLoading(false)
            }
        }
        fetchData()
        return() => cancel = true
    }, [page, url])


    return [[data, setData], isLoading , error]
}