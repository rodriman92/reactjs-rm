import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: 'rodri@mail.com', password: 'coderhouse'},
    {email: 'john@mail.com', password: '1234'},
    {email: 'asd@mail.com', password: 'abcdef'},
]

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
            } else{
                alert("Password incorrecto")
            }
        } else{
            alert("Usuario no encontrado")
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