import { Card } from "react-bootstrap";
import './ViewDetails.scss';
import {AiOutlineEye} from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { Link } from "react-router-dom";



export const ViewDetails = ({id}) => {

    return(
      
        <Card.Text className="mt-auto cardCounter">
            <div className="containerViewDetails">
                <Link style={{textDecoration:'none'}} to={`/item/${id}`}>
                  <span className="btnViewDetails">
                    <AiOutlineEye className="iconView" /><span>Ver producto</span>
                  </span>
                </Link>
                
                
            </div>
        </Card.Text>
        
        
    )
}