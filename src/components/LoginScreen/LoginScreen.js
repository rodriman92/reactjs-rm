import {  useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import './LoginScreen.scss';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider 
} from 'firebase/auth';
import app from '../../firebase/config'

export const LoginScreen = () =>{

    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    const [estaRegistrandose, setEstaRegistrandose] = useState(false)


    const handleSubmit = async (e) =>{
        e.preventDefault()

        const email = e.target.formEmail.value;
        const password = e.target.formPassword.value

        if(estaRegistrandose){

            await createUserWithEmailAndPassword(
                auth, 
                email, 
                password)
        } else{
            signInWithEmailAndPassword(auth, email, password)
        }

    }
    return(
        <div className="login-screen">
            <div className='titleFormContainer'>
                <h2 className='title'>{estaRegistrandose ? "Registrate" : "Inicia sesion"}</h2>
            </div>
            <div className='containerForm'>
                <div className='colLoginData'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <input className="form-control my-4"
                        type={"email"}
                        id="formEmail"
                        placeholder="usuario@mail.com"
                        />

                        <input className="form-control my-4"
                        type={"password"}
                        id="formPassword"
                        placeholder="Contraseña"
                        />

                        <div className='containerButton'>
                            <button type="submit" className='btn btn-login'>
                                {estaRegistrandose ? "Regístrate" : "Inicia sesión"}
                            </button>

                            <button className='btn btn-google'
                                type="submit"
                                onClick={() => signInWithRedirect(auth, googleProvider)}
                                >
                                Acceder con Google <FcGoogle className='iconGoogle' />
                            </button>

                            <button className='btn btn-register'
                                onClick={() => setEstaRegistrandose(!estaRegistrandose)}
                                >
                                {estaRegistrandose
                                ? "¿Ya tenés cuenta? Inicia sesión"
                                : "¿No tenés cuenta? Registrate"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}