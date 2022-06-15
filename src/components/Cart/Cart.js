import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import './Cart.scss';
import { Link } from 'react-router-dom';
import { ItemListContainer } from '../itemListContainer/itemListContainer'

export const Cart = () => {


    const {cart, totalPrice, emptyCart, removeItem, totalQuantity} = useCartContext();


    if(cart.length === 0) {
        return (
            <div className="containerEmptyCart">
                <h2 className="titleEmptyCart">Oops... your cart is empty</h2>
                <img src="../assets/gifs/fill-cart.gif" alt="fill cart" className="gifCart" />
                <Link to={'/'} className='btn btn-primary btnGoShop'>Go to shop!</Link>
            </div>
        )
    }


    return(
        
        <div className="container my-5 cartContainer">
            <h2 className="cartContainer__title">CART</h2>

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
                            <p className="itemPrice">US$ {item.price}</p>
                        </div>
                        <div className="columnQuantity">
                            <p className="quantityCart">{item.cantidad}</p>
                        </div>
                        <p className="priceCart">US$ {item.price * item.cantidad} </p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger btnDeleteItem"><BsFillTrashFill className="iconDeleteItem"/></button>
                    </div>
                ))
            }
            <div className="containerFooterCart">
                <div className="totalContainer">
                    <h4 className="quantityProducts">Quantity <span className="quantityProduct">{totalQuantity()}</span></h4>
                    <h4 className="totalPrice">Total price <span className="totalPriceNumber">US${totalPrice()}</span></h4>
                    <button className="btn btn-warning btnClearCart" onClick={emptyCart}>Clear cart <FaTrash className="iconButtonCart"/> </button>
                    <Link to={'/'} element={<ItemListContainer />} className='btn btn-primary btnContinueShopping'>Add items <FaShoppingBag className="iconButtonCart"/></Link>
                    <button className="btn btn-success btnCheckout">Checkout <MdPayments className="iconButtonCart" /></button>
                </div>
                <div className="buttonsContainer">
                    
                </div>
            </div>
            

        </div>
    )
}