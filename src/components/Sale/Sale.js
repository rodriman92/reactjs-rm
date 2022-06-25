import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";
import { ItemList } from "../itemList/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const Sale = () => {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const onSale = true;

    const handleClick = (e) =>{
        e.stopPropagation();
        
    }
        useEffect(() => {
            setLoading(true);

            //consulto a la base de datos en firebase por la coleccion de productos en oferta
    
            const productosRef = collection(db, "products")
            const q = onSale ? query(productosRef, where("sale", "==", onSale)) : productosRef
            getDocs(q)
                .then((resp) => {
                    const newItems = resp.docs.map((doc) => {
                        return {
                            id:doc.id,
                            ...doc.data()
                        }
                    })
                    setItems(newItems)
                })
                .finally(()=>{
                    setLoading(false)
                })
        }, [onSale])

    return(
        <section className='sections' onClick={handleClick}>
            
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