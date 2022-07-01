import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { UserPanel } from '../UserPanel/UserPanel';


export const NavBar = () =>{
    return(


        <header className="header">
            <Navbar  expand="lg" className='myNavbar'>
            <Container className='containerNav'>
                <Link style={{textDecoration: 'none'}} to={"/"}>
                    <Navbar.Brand href="#home" className='myNavbar__brand'>
                        <h1 className='logo'>SNKRS WORLD</h1>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='togglerMenuMobile'>
                    <TiThMenu className='iconMenuMobile' />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto myNav">
                    <Link to={"/"} className='myNavLink'>NOVEDADES</Link>
                    <Link to={"/genre/men"} className='myNavLink'>HOMBRES</Link>
                    <Link to={"/genre/women"} className='myNavLink'>MUJERES</Link>
                    <Link to={"/genre/kids"} className='myNavLink'>NIÑOS</Link>
                    <Link to={"/sale"} className='myNavLink'>OFERTAS</Link>
                    <Link to={"/contact"} className='myNavLink'>CONTACTO</Link>
                </Nav>
                <CartWidget />
                <UserPanel />
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </header>
    )
}

