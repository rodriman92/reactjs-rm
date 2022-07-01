import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import app from '../firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const AppRouter = () =>{

    const auth = getAuth(app);

    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
      if(usuarioFirebase){
        setUsuarioGlobal(usuarioFirebase);
      } else{
        setUsuarioGlobal(null)
      }
    })

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