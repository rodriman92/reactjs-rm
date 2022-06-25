import {  useState } from 'react';
import {  useAuthContext } from '../../context/AuthContext';
import './LoginScreen.scss';

export const LoginScreen = () =>{

    const {login, error} = useAuthContext();

    const [values, setValues] = useState({
        email: '',
        password:''
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()

        login(values)
    }
    return(
        <div className="login-screen">
            <div className='titleFormContainer'>
                <h2 className='title'>
                    Ingresar
                </h2>
            </div>
            <div className='containerForm'>
                <div className='colLoginData'>
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <input className="form-control my-4"
                        type={"email"}
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        placeholder="User"
                        />
                        {error.email && <small className='text-danger'>{error.email}</small>}

                        <input className="form-control my-4"
                        type={"password"}
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        />
                        {error.password && <small className='text-danger'>{error.password}</small>}

                        <div className='containerButton'>
                            <button type='submit' className='btn btn-primary btnLogin'>Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}