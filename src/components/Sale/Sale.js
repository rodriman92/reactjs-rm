import { useEffect, useState } from "react"
import { pedirDatos } from "../../mock/pedirDatos";
import { Spinner } from "react-bootstrap";
import { ItemList } from "../itemList/ItemList";

export const Sale = () => {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const onSale = true;

    const handleClick = (e) =>{
        e.stopPropagation();
        console.log(e);
    }


    useEffect( () => {
        setLoading(true)

        pedirDatos(true)
        .then( (resp) => {
            setItems( resp.filter ((item) => item.sale === onSale))
        })
        .catch((error) => {
            console.log(error);
        })
        .finally( () => {
            setLoading(false)
        })
    }, [onSale])

    return(
        <section className='sections' onClick={handleClick}>
            <h2 className="sections__h2">sale</h2>
            
            {
                loading
                ?   <Spinner size='xl' role="status" variant='danger' className='spinnerNewRelease'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :
                <>
                    <ItemList items={items}/>
                </>

            }               
        </section>
    )
}