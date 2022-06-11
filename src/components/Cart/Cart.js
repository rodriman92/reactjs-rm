import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa"
import './Cart.scss';

export const Cart = () => {


    const {cart, totalPrice, emptyCart, removeItem} = useCartContext();

    return(
        
        <div className="container my-5 cartContainer">
            <h2 className="cartContainer__title">CART</h2>


            {
                cart.map((item) => (
                    <div key={item.id} className="my-2 cartItemContainer">
                        <div className="columnTitle">
                            <h5 className="titleCart">Product: {item.title}</h5>
                        </div>
                        <div className="columnImg">
                            <img src={item.img} className="card-img-top imgCart" alt={item.title} />
                        </div>
                        <div className="columnQuantity">
                            <p className="quantityCart">Quantity: {item.cantidad}</p>
                        </div>
                        <h6 className="priceCart">Price: ${item.price * item.cantidad} </h6>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    </div>
                ))
            }

            <h4>Total price: US$ {totalPrice()}</h4>

            <button className="btn btn-warning btnClearCart" onClick={emptyCart}> <FaTrash /> Clear cart</button>
        </div>
    )
}