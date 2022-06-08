import { useEffect, useState } from "react"
import { pedirDatos } from "../../mock/pedirDatos";
import { ItemList } from "../itemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Women = () =>{

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {genreId} = useParams();

    useEffect(() => {

        setLoading(true);
        pedirDatos(true)
        .then((resp) => {
            setItems( resp.filter( (item) => item.genre === genreId))
        })
        .catch((error) => {
            console.log(error);

        })
        .finally( () => {
            setLoading(false)
        })
    },[genreId])

    return(

        <section className='sections'>

            <h2 className="section__h2">{genreId}</h2>

            {
                loading
                ?   <Spinner size='xl' role="status" variant='danger' className='spinnerNewRelease'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                :

                <>
                    <ItemList items={items} />
                </>
            }
        </section>
    )
}