import { Card } from "react-bootstrap"
import { ViewDetails } from "../ViewDetails/ViewDetails"

export const Item = ({items}) => {
    return (
        <Card className="cardProduct" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={items.img} />
            <Card.Body className="cardBody">
                <Card.Text className="cardPrice">
                    $ {items.price},00
                </Card.Text>
                <Card.Title className="cardTitle">{items.title}</Card.Title>
                <ViewDetails id={items.id} stockMin={items.stockMin} stockMax={items.stockMax} />
            </Card.Body>        
        </Card>
    )
}