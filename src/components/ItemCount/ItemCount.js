import { useState } from "react"
import { Card } from "react-bootstrap";
import './ItemCount.scss';
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemCount = ({title, img, legend, genre, price, stockMin, stockMax}) => {

    const [contador, setContador] = useState(1);

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
      'Added 🛒',{
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
      <div className="cardContainer">
          <Card className="cardProduct" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{title}</Card.Title>
              <Card.Text className="cardInfo">
                Info: {legend}
              </Card.Text>
              <Card.Text className="cardGenre">
                Genre: {genre}
              </Card.Text>
              <Card.Text className="cardPrice">
                $ {price}
              </Card.Text>
              <Card.Text className="cardCounter">
                <div className="btnCounter">
                  <span className="decrement" onClick={decrementar}><FaMinus/></span>
                  <span className="counter">{contador}</span>
                  <span className="increment" onClick={incrementar}><FaPlus/></span>
                </div>
                <div className="containerAddCart">
                  <button className="btn btn-light btnAddCart" onClick={toastAddProduct}>
                    <ToastContainer />
                    <span className="iconCartText">ADD</span>
                    <FaShoppingCart className="iconCart" />
                    </button>
                </div>
              </Card.Text>
            </Card.Body>        
          </Card>
      </div>
      
        
    )
}