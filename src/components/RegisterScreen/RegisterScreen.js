import '../LoginScreen/LoginScreen.scss'
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useLoginContext } from '../../context/LoginContext';
import { Formik, Form, Field, ErrorMessage } from 'formik'


function RegisterScreen() {

    const { estaRegistrandose, handleSubmitRegister, setEstaRegistrandose } = useLoginContext();

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


  return (
    <div className="login-screen">
            <img src='../../assets/gifs/login.svg' alt='imagen login' className='imageLogin' />
            <h2 className='titleLogin'>REGISTRO</h2>
            <div className='container my-5'>
                        <Formik 
                            initialValues={initialValues}
                            validate={validateFields}
                            onSubmit={() => {
                                setEstaRegistrandose(!estaRegistrandose)
                            }}

                        >
                            {
                                ({isSubmitting}) => 
                                    <Form className='form-container' onSubmit={handleSubmitRegister}>
                                        <label className='form-label'> Ingresa tu email
                                            <Field name='email' className='form-input' />
                                            <ErrorMessage name='email' component='small' className='form-error'/>
                                            
                                        </label>

                                        <label className='form-label'> Ingresa tu contraseña
                                            <Field name='password' className='form-input' type='password' />
                                            <ErrorMessage name='password' component='small' className='form-error' />
                                            
                                        </label>

                                        <button type="submit" className='btn btn-light btn-login' >
                                            Registrarme
                                        </button>

                                        <hr className='form-divider'/>

                                        <Link to={'/login'} element={<LoginScreen />}><Button className='btn btn-dark' disabled={isSubmitting}>Tienes cuenta? Inicia sesión</Button></Link>

                                    </Form>
                            }
                        </Formik>
            </div>
        </div>
  )
}

export default RegisterScreen