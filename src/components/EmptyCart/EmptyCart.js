import { Link } from 'react-router-dom';


export const EmptyCart = () => {
    return(
        <div className="containerEmptyCart">
                <h2 className="titleEmptyCart">Ups..., tu carrito se encuentra vacío</h2>
                <img src="../assets/empty_cart.svg" alt="empty cart" className="gifCart" />
                <Link to={'/'} className='btn btn-primary btnGoShop'>Ir a comprar</Link>
            </div>
    )
}