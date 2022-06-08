import { AiOutlineShoppingCart } from 'react-icons/ai';
import Nav from 'react-bootstrap/Nav';
import './CartWidget.scss'
export const CartWidget = () =>{
    
    return(
        <Nav>
            <Nav.Link>
                <AiOutlineShoppingCart className='iconCart' />
                <span className='cartCounter'>4</span>
            </Nav.Link>
        </Nav>
    )
}