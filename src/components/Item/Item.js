import { Card } from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount"

export const Item = ({items}) => {
    return (
        <Card className="cardProduct" style={{ width: '20rem' }}>
            <Card.Img variant="top" src={items.img} />
            <Card.Body className="cardBody">
                <Card.Text className="cardPrice">
                    US$ {items.price},00
                </Card.Text>
                <Card.Title className="cardTitle">{items.title}</Card.Title>
                <ItemCount id={items.id} stockMin={items.stockMin} stockMax={items.stockMax} />
            </Card.Body>        
        </Card>
    )
}