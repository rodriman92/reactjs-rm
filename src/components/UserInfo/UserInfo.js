import { useAuthContext } from "../../context/AuthContext"
import './UserInfo.scss';
import { FiLogOut } from "react-icons/fi";

export const UserInfo = () =>{

    const { auth, logout } = useAuthContext();

    return(
        
        <div className="userInfoContainer">
            <p className="dataUser">Welcome, {auth.userId}</p>
            <FiLogOut onClick={logout} className='btnLogout' />
        </div>
    )
}