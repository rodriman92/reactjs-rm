import { BrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { useLoginContext } from '../context/LoginContext';

export const AppRouter = () =>{

    const { usuarioGlobal } = useLoginContext()

    return (
        <BrowserRouter>

        {
          usuarioGlobal
          ? <PrivateRoutes />
              
          : <PublicRoutes />
        }
          
        </BrowserRouter>
    )
}