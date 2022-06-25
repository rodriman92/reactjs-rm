import { useCartContext } from "../../context/CartContext"
import { AiOutlineClose } from "react-icons/ai";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import './Cart.scss';
import { Link } from 'react-router-dom';
import { ItemListContainer } from '../itemListContainer/itemListContainer'
import { Checkout } from "../Checkout/Checkout";
export const Cart = () => {


    const {cart, totalPrice, emptyCart, removeItem, totalQuantity} = useCartContext();

    if(cart.length === 0) {
        return (
            <div className="containerEmptyCart">
                <h2 className="titleEmptyCart">Ups..., tu carrito se encuentra vacío</h2>
                <img src="../assets/gifs/fill-cart.gif" alt="fill cart" className="gifCart" />
                <Link to={'/'} className='btn btn-primary btnGoShop'>Ir a comprar</Link>
            </div>
        )
    }


    return(
        
        <div className="container my-5 cartContainer">
            <h2 className="cartContainer__title">CARRITO ({totalQuantity()})</h2>

            {
                cart.map((item) => (
                    <div key={item.id} className="cartItemContainer">
                        
                        <div className="columnTitle">
                            <h5 className="titleCart">{item.title}</h5>
                        </div>
                        <div className="columnImg">
                            <img src={item.img} className="card-img-top imgCart" alt={item.title} />
                        </div>
                        <div className="colItemPrice">
                            <p className="itemPrice">$ {item.price}</p>
                        </div>
                        <div className="columnQuantity">
                            <p className="quantityCart">{item.cantidad}</p>
                        </div>
                        <p className="priceCart">$ {item.price * item.cantidad} </p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger btnDeleteItem"><AiOutlineClose className="iconDeleteItem"/></button>
                    </div>
                ))
            }
            <div className="containerFooterCart">
                <div className="totalContainer">
                    <h4 className="quantityProducts">Total de productos <span className="quantityProduct">{totalQuantity()}</span></h4>
                    <h4 className="totalPrice">Precio final <span className="totalPriceNumber">${totalPrice()}</span></h4>
                    <div className="btnContainer">
                        <button className="btn btn-warning btnClearCart" onClick={emptyCart}>Vaciar carrito <FaTrash className="iconButtonCart"/> </button>
                        <Link to={'/'} element={<ItemListContainer />} className='btn btn-primary btnContinueShopping'>Agregar items <FaShoppingBag className="iconButtonCart"/></Link>
                        <Link to={'/checkout'} element={<Checkout />} className="btn btn-success btnCheckout">Checkout <MdPayments className="iconButtonCart" /></Link>
                    </div>
                    
                </div>
                <div className="buttonsContainer">
                    
                </div>
            </div>
            

        </div>
    )
}