import { createContext, useContext, useState } from "react"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mockUsers = [
    {email: 'rodri@mail.com', password: 'coderhouse'},
    {email: 'john@mail.com', password: '1234'},
    {email: 'asd@mail.com', password: 'abcdef'},
]

const MySwal = withReactContent(Swal)


export const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}


export const AuthProvider = ({children}) =>{

    const [auth, setAuth] = useState({
        loggedIn: false,
        userId: null
    })

    const [error, setError] = useState({});

    const login = (values) => {

    const {email, password} = values;

    const match = mockUsers.find((user) => user.email === email)

        if(match) {
            if(match.password === password) {
                setAuth({
                    loggedIn: true,
                    userId: match.email
                    
                })
                MySwal.fire({
                    title: <h5>Ingreso existoso</h5>,
                    icon: "success",
                    toast: true,
                    background: "#8DD958",
                    color: "#fff",
                    position: "top",
                    timer: 1000,
                    showConfirmButton: false
                    
                })
            } else{
                setError(
                    MySwal.fire({
                        title: <h5>La contraseña no es correcta</h5>,
                        icon: "error",
                        toast: false,
                        background: "#c62828",
                        color: "#fff",
                        position: "center",
                        timer: 3000
                        
                    })
                )
            }
        } else{
            MySwal.fire({
                title: <h5>El usuario {email} no existe</h5>,
                icon: "error",
                toast: false,
                background: "#c62828",
                color: "#fff",
                position: "center",
                timer: 3000
                
                
            })
        }
    }

    const logout = () =>{
        setAuth({
            loggedIn: false,
            userId: null
        })
    }


    return(
        <AuthContext.Provider value={{auth, login, logout, error}}>
            {children}
        </AuthContext.Provider>
    )
}