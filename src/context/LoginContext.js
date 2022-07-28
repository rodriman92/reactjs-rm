import { createContext, useContext, useState } from "react";
import app from '../firebase/config'
import { useSweetAlert } from "../hooks/useSweetAlert";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider, 
    onAuthStateChanged
    
} from 'firebase/auth';

export const LoginContext = createContext();

export const useLoginContext = () => {
    return useContext(LoginContext);
}

export const LoginProvider = ({children}) => {
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
      if(usuarioFirebase){
        setUsuarioGlobal(usuarioFirebase);
      } else{
        setUsuarioGlobal(null)
      }
    })

    const [estaRegistrandose, setEstaRegistrandose] = useState(false)

    const {showToast} = useSweetAlert("Sesión iniciada", "success", "top-right")

    const {showToastError} = useSweetAlert("El usuario o la clave no son correctas", "error", "top-right")

    const {showToastErrorRegister} = useSweetAlert("El email ya se encuentra registrado", "warning", "top-right")


    let email;
    let password;

    const handleSubmitForm = async (e) =>{
        e.preventDefault()

        email = e.target.email.value;
        password = e.target.password.value;
        

        try {
            await signInWithEmailAndPassword(auth, email, password);
            showToast();
        } catch (error) {
            showToastError()

        }
        

    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        email = e.target.email.value;
        password = e.target.password.value;


        try {
            await createUserWithEmailAndPassword(
                auth, 
                email, 
                password)
                showToast();
            
        } catch (error) {
            showToastErrorRegister()
        }
    }
    return(
        <LoginContext.Provider value = {
            {
                app, 
                auth, 
                onAuthStateChanged,
                googleProvider,
                usuarioGlobal,
                estaRegistrandose,
                setEstaRegistrandose,
                signInWithRedirect,
                handleSubmitForm,
                handleSubmitRegister
            }

        }>
            {children}
        </LoginContext.Provider>
    )
}
