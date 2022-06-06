import './Navbar.scss';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () =>{
    return(
        <header className="header">
            <Navbar  expand="lg" className='myNavbar'>
            <Container className='containerNav'>
                <Link to={"/"}>
                    <Navbar.Brand href="#home" className='myNavbar__brand'>
                        <img src={logo} alt='Logo de SportWorld' className='myLogo'/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto myNav">
                    <Link to={"/"} className='myNavLink'>NEW RELEASE</Link>
                    <Link to={"/men"} className='myNavLink'>MEN</Link>
                    <Link to={"/women"} className='myNavLink'>WOMEN</Link>
                    <Link to={"/kids"} className='myNavLink'>KIDS</Link>
                    <Link to={"/sale"} className='myNavLink'>SALE!</Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </header>
    )
}

