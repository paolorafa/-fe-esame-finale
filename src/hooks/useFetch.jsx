import {useState, useEffect} from 'react'




export const useFetch = ( url) =>{
    const [data, setData]= useState(null)
    const [isLoading, setLoading]= useState(false)
    const [error, setError]= useState(null)
    
    
  


    const getData = async () =>{
        setLoading(true)
        
           try {
            const response = await fetch(url, )
               
            const dataResponse = await response.json()
            setData(dataResponse)
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    } 
        
        

    useEffect(()=>{
            getData()
    },[url])

    return { data, isLoading, error}

}

