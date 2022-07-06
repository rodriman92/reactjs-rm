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
                <Link style={{textDecoration:'none'}} to={`/item/${id}`} className='btn btn-light btnVerProducto'>
                  <AiOutlineEye className="iconView" /> Ver detalle
                </Link>
            </div>
        </Card.Text>
        
        
    )
}