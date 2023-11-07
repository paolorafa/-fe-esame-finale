 import { Outlet} from 'react-router-dom';
 import LoginProvider from '../pages/LoginProvider';


 export const isAuth = () => {
    return localStorage.getItem('userToken');

}


const ProtecetedRouters = () => {
     const auth = isAuth();
     return auth ? <Outlet/>:<LoginProvider/>
 }

 export default ProtecetedRouters