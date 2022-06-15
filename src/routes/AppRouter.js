
import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () =>{

    const { auth } = useAuthContext();

    return (
        <BrowserRouter>

        {
          auth.loggedIn
          ? <PrivateRoutes />
              
          : <PublicRoutes />
        }
          
        </BrowserRouter>
    )
}