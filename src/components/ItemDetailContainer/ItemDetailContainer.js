import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';


export const ItemDetailContainer = ({title, content}) =>{

    const [item, setItem] = useState([null]);

    const [loading, setLoading] = useState(true);

    const {itemid} = useParams();

    useEffect(() => {
        
        setLoading(true)

        const docRef = doc(db, "products", itemid)

        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data()})
            })
            .finally( ()=> {
                setLoading(false)
            })
    }, [itemid])

    return (
        <section className='sections'>
            <h2 className='sections__h2'>{title}</h2>
            <p className='sections__p'>{content}</p>
            {
                loading 
                ?   <Loader />
                :
                <>
                    <ItemDetail item={item}/>
                </>
                
                
            }
            
        </section>
    )
}