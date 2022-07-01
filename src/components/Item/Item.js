import { Card } from "react-bootstrap"
import { ViewDetails } from "../ViewDetails/ViewDetails"
import { Link } from 'react-router-dom';
import { Sale } from "../Sale/Sale";

export const Item = ({items}) => {
    return (
        <Card className="cardProduct" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={items.img} className='imgCard' />
            <Card.Body className="cardBody">
                {
                    items.sale === true
                    ? <Link to={'./sale'} element={<Sale />}>
                        <span className="spanSale">OFERTA</span>
                      </Link>
                    : 
                      <span></span>
                }
                <Card.Text className="cardPrice">
                    $ {items.price},00
                </Card.Text>
                <Card.Title className="cardTitle">{items.title}</Card.Title>
                <ViewDetails id={items.id} stockMin={items.stockMin} stockMax={items.stockMax} />
            </Card.Body>        
        </Card>
    )
}