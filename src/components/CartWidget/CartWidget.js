import { AiOutlineShoppingCart } from 'react-icons/ai';
import Nav from 'react-bootstrap/Nav';
import './CartWidget.scss'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';



    export const CartWidget = () =>{

    const {totalQuantity} = useCartContext();

    return(
        <Nav>
            <Nav.Link>
                <Link to={'/cart'}>
                    <AiOutlineShoppingCart className='iconCart' />
                </Link>
                <span className='cartCounter'>{totalQuantity()}</span>
            </Nav.Link>
        </Nav>
    )
}