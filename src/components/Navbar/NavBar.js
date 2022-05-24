import './Navbar.scss';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { CartWidget } from '../CartWidget/CartWidget';



export const NavBar = () =>{
    return(
        <header className="header">
            <Navbar  expand="lg" className='myNavbar'>
            <Container className='containerNav'>
                <Navbar.Brand href="#home" className='myNavbar__brand'>
                    <img src={logo} alt='Logo de SportWorld' className='myLogo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto myNav">
                    <Nav.Link href="#new-release" className='myNavLink'>NEW RELEASE</Nav.Link>
                    <Nav.Link href="#men" className='myNavLink'>MEN</Nav.Link>
                    <Nav.Link href="#women" className='myNavLink'>WOMEN</Nav.Link>
                    <Nav.Link href="#kids" className='myNavLink'>KIDS</Nav.Link>
                    <Nav.Link href="#sale" className='myNavLink'>SALE!</Nav.Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </header>
    )
}

