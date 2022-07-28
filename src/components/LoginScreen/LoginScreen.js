import { FcGoogle } from 'react-icons/fc'
import { useLoginContext } from '../../context/LoginContext';
import './LoginScreen.scss';
import {Link} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import { Button } from 'react-bootstrap'
import { useSweetAlert } from '../../hooks/useSweetAlert';
export const LoginScreen = () =>{

    
    const { estaRegistrandose, handleSubmitForm, auth, googleProvider, signInWithRedirect, setEstaRegistrandose } = useLoginContext();

    const {showToastOk} = useSweetAlert("Sesion iniciada", "success", "top-right");

    const validateFields = values => {
        const errors = {}
        if(!values.email) {
            errors.email = 'El email es requerido' 
        }

        if(!values.password) {
            errors.password = 'La contraseña es requerida' 
            } else if(values.password.length < 6) {
        errors.password = 'La longitud de la contraseña debe ser mayor a 6 caracteres'
        }
                            
        return errors;
    }

    const initialValues = {
        email: '',
        password: ''
    }
    

    return(
        
        <div className="login-screen">
            <img src='../../assets/gifs/login.svg' alt='imagen login' className='imageLogin' />
            <h2 className='titleLogin'>{estaRegistrandose ? 'REGISTRO' : 'INGRESO'}</h2>
            <div className='container my-5'>
                <div className=''>
                    <Formik 
                        initialValues={initialValues}
                        validate={validateFields}

                        >
                            {
                                ({isSubmitting}) => 
                                <Form className='form-container' onSubmit={handleSubmitForm}>
                                    <label className='form-label'> Ingresa tu email
                                        <Field name='email' className='form-input' />
                                        <ErrorMessage name='email' component='small' className='form-error'/>
                                        
                                    </label>

                                    <label className='form-label'> Ingresa tu contraseña
                                        <Field name='password' className='form-input' type='password' />
                                        <ErrorMessage name='password' component='small' className='form-error' />
                                        
                                    </label>

                                    <button type="submit" className='btn btn-light btn-login'>
                                        {estaRegistrandose ? "Regístrate" : "Inicia sesión"}
                                    </button>

                                    <button className='btn btn-light btn-google' disabled={isSubmitting} type="submit"
                                        onClick=
                                        {
                                            () =>  signInWithRedirect(auth, googleProvider)    
                                        }
                                        
                                    >
                                        <FcGoogle className='icon-btn' /> Inicia con Google
                                        
                                    </button>
                                    

                                    <hr className='form-divider'/>

                                    <Link to={'/register'} element={<RegisterScreen />}><Button className='btn btn-dark'>No tienes cuenta? Registrate</Button></Link>

                                </Form>
                            }
                        </Formik>
                </div>
            </div>
        </div>
    )
}