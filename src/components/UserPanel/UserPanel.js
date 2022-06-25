import { useAuthContext } from "../../context/AuthContext";
import { FaUserCircle } from 'react-icons/fa'
import { Dropdown, DropdownButton } from "react-bootstrap";
import './UserPanel.scss'
import {Link} from 'react-router-dom'
export const UserPanel = () =>{
    const { auth, logout } = useAuthContext();

    return(
        <DropdownButton className="dropDownUser" id="dropdown-basic-button" variant="danger" title={<FaUserCircle className="iconUser" />}>
            <Dropdown.Item disabled>Bienvenido {auth.userId}</Dropdown.Item>
            <Link to={'/order'}><Dropdown.Item >Ver ordenes</Dropdown.Item></Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
        </DropdownButton>
    )
}