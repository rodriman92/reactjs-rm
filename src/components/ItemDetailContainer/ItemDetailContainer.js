import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { pedirDatos } from '../../mock/pedirDatos';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = ({title, content}) =>{

    const [item, setItem] = useState([null]);

    const [loading, setLoading] = useState(true);


    const {itemid} = useParams();

    useEffect(() => {
        
        setLoading(true)

        pedirDatos(true)
        .then((resp) => {
            setItem( resp.find((item) => item.id === Number(itemid)) )
            console.log(itemid)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemid])

    return (
        <section className='sections'>
            <h2 className='sections__h2'>{title}</h2>
            <p className='sections__p'>{content}</p>
            {
                loading 
                ?   <Spinner size='xl' role="status" variant='danger' className='spinnerNewRelease'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                :
                <>
                    <ItemDetail item={item}/>
                </>
                
                
            }
            
        </section>
    )
}