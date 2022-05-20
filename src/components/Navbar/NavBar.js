import './Navbar.scss';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FiShoppingCart } from 'react-icons/fi';



export const NavBar = () =>{
    return(
        <header className="header">
            <Navbar collapseOnSelect expand="lg" className='myNavbar'>
                <Container>
                <Navbar.Brand href="#home" className='myNavbar__brand'>
                    <img src={logo} alt='Logo de Sportion' className='myLogo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto myNav">
                        <Nav.Link href="#new-release" className='myNavLink'>NEW RELEASE</Nav.Link>
                        <Nav.Link href="#men" className='myNavLink'>MEN</Nav.Link>
                        <Nav.Link href="#women" className='myNavLink'>WOMEN</Nav.Link>
                        <Nav.Link href="#kids" className='myNavLink'>KIDS</Nav.Link>
                        <Nav.Link href="#sale" className='myNavLink'>SALE!</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Button className='btnCart'><FiShoppingCart className='iconCart' /></Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

