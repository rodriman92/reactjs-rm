import { useAuthContext } from "../../context/AuthContext"
import './UserInfo.scss';
import { GrLogout } from "react-icons/gr";

export const UserInfo = () =>{

    const { auth, logout } = useAuthContext();

    return(
        
        <div className="userInfoContainer">
            <p className="dataUser">Bienvenido, {auth.userId}</p>
            <button className="btnLogout" onClick={logout}>Logout <GrLogout className="iconLogout" /></button>
        </div>
    )
}