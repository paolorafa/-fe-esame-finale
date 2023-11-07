import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export const LoginSucces = () => {
    const navigate = useNavigate()
    const {token}=useParams()
    
    

    useEffect(() => {
        // Salva l'ID nell'LocalStorage quando il componente si monta
        if(token){
            localStorage.setItem('userToken', token);
        navigate('/home') 
        }
       
      }, [token]);
  return (
    <div>{token}</div>
  )
}
