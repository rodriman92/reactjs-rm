import { AiOutlineShoppingCart } from 'react-icons/ai';
import Nav from 'react-bootstrap/Nav';
import './CartWidget.scss'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';



    export const CartWidget = () =>{

    const {totalQuantity} = useCartContext();

    return(
        <>
            <Link to={'/cart'}>
                <AiOutlineShoppingCart className={`iconCart ${totalQuantity() === 0 ? 'cart-hidden' : ''}`} />
            </Link>
            <span className={`cartCounter ${totalQuantity() === 0 ? 'cart-hidden' : ''}`}>{totalQuantity()}</span>
        </>
             
    )
}