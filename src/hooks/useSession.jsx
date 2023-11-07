import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { isAuth } from '../middlewars/ProtectedRoutes'

const useSession = () =>{
    const session = isAuth()
    const decodeSessione = session ? jwtDecode(session) : null;
    console.log(session);

    const navigate = useNavigate()
    

    useEffect(() =>{
        if(!session){
            navigate('/', {replace: true})
        }
    }, [navigate, session])
    return decodeSessione
}

export default useSession