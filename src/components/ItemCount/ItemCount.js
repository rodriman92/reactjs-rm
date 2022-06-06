import { Card } from "react-bootstrap";
import './ItemCount.scss';
import {AiOutlineEye} from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { Link } from "react-router-dom";



export const ItemCount = ({id}) => {

    return(
      
        <Card.Text className="mt-auto cardCounter">
            <div className="containerViewDetails">
                <Link style={{textDecoration:'none'}} to={`/item/${id}`}>
                  <span className="btnViewDetails">
                    <AiOutlineEye className="iconView" /><span>View Product</span>
                  </span>
                </Link>
                
                
            </div>
        </Card.Text>
        
        
    )
}