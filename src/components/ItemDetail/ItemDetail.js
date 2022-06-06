import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';
import './ItemDetail.scss'
import {IoMdArrowRoundBack} from 'react-icons/io';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAttachMoney } from 'react-icons/md';


export const ItemDetail = ( {item} ) =>{

    const INITIAL_VALUE = 1;

    const [contador, setContador] = useState(INITIAL_VALUE);

    const incrementar = () => {
        if(contador<item.stockMax){ 
          setContador(contador+1); 
        } 
      }
  
      const decrementar = () => {
        if(contador>=item.stockMin){
          setContador(contador-1);
        }
      };


    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
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
                    <Link style={{textDecoration: 'none'}} to={`../categorias/${item.category}`}>
                        <span className="detailCategory">{item.category}</span>
                    </Link>
                    
                    <h3 className="detailTitle">{item.title}</h3>
                    <h4 className="detailLegend">{item.legend}</h4>
                    <Link style={{textDecoration: 'none'}} to={`../${item.genre}`}>
                        <h4 className="detailGenre">{item.genre}</h4>
                    </Link>
                    <h4 className="detailPrice">US$ {item.price}, 00</h4>
                <div className="containerCounter">
                    <button className="btn btn-dark btnCounter" onClick={decrementar}><FaMinus className="iconCounterButton"/></button>
                    <span className="counterNumber">{contador}</span>
                    <button className="btn btn-dark btnCounter" onClick={incrementar}><FaPlus className="iconCounterButton"/></button>
                </div>
                <div className="containerButton">
                    <button className="btn btn-light btnAddCart">
                        ADD TO CART <AiOutlineShoppingCart className="iconButton" />
                    </button>
                    <button className="btn btn-light btnBuy">
                        BUY NOW <MdOutlineAttachMoney className="iconButton"/>
                    </button>
                </div>
                    

                </div>
            </div>
            
        </div>
    )
}