import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './CartWidget.scss'
export const CartWidget = () =>{
    return(
        <Nav>
            <Nav.Link>
                <Button variant='light' className='btnCart'>
                    <AiOutlineShoppingCart className='iconCart' />
                    <span className='cartCounter'>4</span>
                </Button>
            </Nav.Link>
        </Nav>
    )
}