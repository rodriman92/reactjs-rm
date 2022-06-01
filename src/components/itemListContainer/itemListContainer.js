import { useEffect, useState } from 'react';
import './itemListContainer.scss';
import {Spinner} from 'react-bootstrap';
import { pedirDatos } from '../../mock/pedirDatos';
import { ItemList } from '../itemList/ItemList';

export const ItemListContainer = ({title, content}) =>{

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        

        setLoading(true)

        pedirDatos(true)
        .then((resp) => {
            setItems(resp)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [])

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
                    <ItemList items={items}/>
                    
                </>
                
            }
            
        </section>
    )
}