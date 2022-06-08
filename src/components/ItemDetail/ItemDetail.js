import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

import './ItemDetail.scss'
import {IoMdArrowRoundBack} from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { toast } from "react-toastify";
import { ItemCounter } from "../ItemCounter/ItemCounter";


export const ItemDetail = ( {item} ) =>{

    const INITIAL_VALUE = 1;

    const [cantidad, setCantidad] = useState(INITIAL_VALUE);

    const handleAddCart = () =>{

        const itemToCart = {
            ...item,
            cantidad
        }
        console.log(itemToCart)
        showToast();
      }

    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
    }

    const showToast = () => {

        toast('Added 🛒', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return(
        <div className="containerDetail">
            <div className="containerBackButton">
                <span className="btnBack" onClick={handleBack}><IoMdArrowRoundBack className="iconBack"/>BACK</span>
            </div>
            <div className="rowContainer">
                <div className="containerImg">
                    <img src={item.img} alt={item.title} className="card-img-top imgDetail" />
                </div>
                <div className="containerDetailProduct">
                    <Link style={{textDecoration: 'none'}} to={`../category/${item.category}`}>
                        <span className="detailCategory">{item.category}</span>
                    </Link>
                    
                    <h3 className="detailTitle">{item.title}</h3>
                    <h4 className="detailLegend">{item.legend}</h4>
                    <Link style={{textDecoration: 'none'}} to={`../genre/${item.genre}`}>
                        <h4 className="detailGenre">{item.genre}</h4>
                    </Link>
                    <h4 className="detailPrice">US$ {item.price}, 00</h4>
                <div className="containerCounter">
                    <ItemCounter 
                        max={item.stockMax}
                        counter={cantidad}
                        setCounter={setCantidad}
                    />
                    
                </div>
                <div className="containerButton">
                    <button className="btn btn-light btnAddCart" onClick={handleAddCart}>
                        ADD TO CART <AiOutlineShoppingCart className="iconButton" />
                    </button>
                    <button className="btn btn-light btnBuy" onClick={showToast}>
                        BUY NOW <MdOutlineAttachMoney className="iconButton"/>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}