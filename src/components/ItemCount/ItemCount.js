import { Card } from "react-bootstrap";
import { useState } from "react";
import './ItemCount.scss';
import { FaMinus, FaPlus } from 'react-icons/fa';
import {AiOutlineEye} from 'react-icons/ai';
import {BsCartPlus} from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemCount = ({stockMin, stockMax}) => {

    const INITIAL_VALUE = 1;

    const [contador, setContador] = useState(INITIAL_VALUE);

    const incrementar = () => {
        if(contador<stockMax){ 
          setContador(contador+1); 
        } 
      }
  
      const decrementar = () => {
        if(contador>=stockMin){
          setContador(contador-1);
        }
      };


    const toastAddProduct = () => toast(
        'Added 👜',{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          
        });

    return(
      
        <Card.Text className="mt-auto cardCounter">
             <div className="btnCounter">
                 <span className="decrement" onClick={decrementar}><FaMinus /></span>
                 <span className="counter">{contador}</span>
                 <span className="increment" onClick={incrementar}><FaPlus /></span>
            </div>
            <div className="containerAddCart">
                <button className="btn btn-light btnAddCart" onClick={toastAddProduct}>
                  <BsCartPlus className="iconCart" />
                </button>
            </div>
            <div className="containerViewDetails">
                <button className="btn btn-light btnViewDetails">
                  <AiOutlineEye className="iconView" />
                </button>
            </div>
        </Card.Text>
        
        
    )
}