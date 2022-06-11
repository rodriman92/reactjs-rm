import { useContext, useState } from 'react';
import { useCol } from 'react-bootstrap/esm/Col';
import { AuthContext, useAuthContext } from '../../context/AuthContext';
import './LoginScreen.scss';
export const LoginScreen = () =>{


    const {login} = useAuthContext();

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
            <div>
                <h2>
                    Login
                </h2>
            </div>
            

            <form className='fornContainer'>
                
                <input className="form-control my-4"
                type={"email"}
                name="email"
                value={values.email}
                onChange={handleInputChange}
                
                />

                <input className="form-control my-4"
                type={"password"}
                name="password"
                value={values.password}
                onChange={handleInputChange}
                
                />

                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
        </div>
    )
}