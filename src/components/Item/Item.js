import { Card } from "react-bootstrap"
import { ItemCount } from "../ItemCount/ItemCount"

export const Item = ({items}) => {
    return (
        <Card className="cardProduct h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={items.img} />
            <Card.Body className="cardBody">
                <Card.Text className="cardPrice">
                    $ {items.price}
                </Card.Text>
                <Card.Title className="cardTitle">{items.title}</Card.Title>
                <Card.Text className="cardInfo">
                    Info: {items.legend}
                </Card.Text>
                <Card.Text className="cardStock">
                    Available: {items.stockMax}
                </Card.Text>
                <ItemCount stockMin={items.stockMin} stockMax={items.stockMax} />
            </Card.Body>        
        </Card>
    )
}