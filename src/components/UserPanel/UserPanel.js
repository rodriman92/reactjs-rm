import { FaUserCircle } from 'react-icons/fa'
import { Dropdown, DropdownButton } from "react-bootstrap";
import './UserPanel.scss'
import app from '../../firebase/config'
import { getAuth, signOut } from 'firebase/auth';
import {Link} from 'react-router-dom'


export const UserPanel = () =>{

    const auth = getAuth(app);

    return(
        <DropdownButton className="dropDownUser" id="dropdown-basic-button" variant="dark" title={<FaUserCircle className="iconUser" />}>
            <Dropdown.Item disabled>Bienvenido</Dropdown.Item>
            <Dropdown.Divider />
            <Link style={{textDecoration: 'none', color: '#000'}} className='mx-3' to={'../orders'}>Mis ordenes</Link>
            <Dropdown.Item onClick={() => signOut(auth)}>Cerrar sesión</Dropdown.Item>
        </DropdownButton>
    )
}