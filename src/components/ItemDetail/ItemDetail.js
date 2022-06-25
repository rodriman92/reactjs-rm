import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import './ItemDetail.scss'
import {IoMdArrowRoundBack} from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const ItemDetail = ( {item} ) =>{

    const {addItem, isincart} = useContext(CartContext)

    const MySwal = withReactContent(Swal)

    const INITIAL_VALUE = 1;

    const [cantidad, setCantidad] = useState(INITIAL_VALUE);

    //funcion que muestra un toast cuando un item se agrega al carrito
    const showToast = () => {
        MySwal.fire({
            title: <h5>Agregado al carrito</h5>,
            icon: "success",
            toast: true,
            background: "#c62828",
            color: "#fff",
            position: "top-right",
            timer: 2000,
            showConfirmButton: false,
            
        })
    }
    const handleAddCart = () =>{
        if(item.stockMax === 0) return
        const itemToCart = {
            ...item,
            cantidad
        }
        showToast();
        addItem(itemToCart);
    }

    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
    }

    return(
        <div className="containerDetail">
            <div className="containerBackButton">
                <span className="btnBack" onClick={handleBack}><IoMdArrowRoundBack className="iconBack"/>VOLVER</span>
            </div>
            <div className="rowContainer">
                <div className="containerImg">
                    <img src={item.img} alt={item.title} className="card-img-top imgDetail" />
                </div>
                <div className="containerDetailProduct">
                    <Link style={{textDecoration: 'none'}} to={`../category/${item.category}`}>
                        <span className="detailCategory">{item.category}</span>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={`../genre/${item.genre}`}>
                        <h4 className="detailGenre">{item.genre}</h4>
                    </Link>
                    
                    <h3 className="detailTitle">{item.title}</h3>
                    <h4 className="detailLegend">{item.legend}</h4>
                    
                    <h4 className="detailPrice">$ {item.price}, 00</h4>

                <hr />
                {
                    isincart(item.id)
                    ?                     
                        <Link to={'/cart'} className="btn btn-light btnViewCart">IR AL CHECKOUT</Link>
                    :   
                    <div className="containerCounter">
                    <ItemCounter 
                        max={item.stockMax}
                        counter={cantidad}
                        setCounter={setCantidad}
                    />
                    
                    <button className="btn btn-light btnAddCart" onClick={handleAddCart}>
                        AGREGAR AL CARRITO <AiOutlineShoppingCart className="iconButton" />
                    </button>
                    </div>
                }
                    </div>
                </div>
            </div>
        )
    }
