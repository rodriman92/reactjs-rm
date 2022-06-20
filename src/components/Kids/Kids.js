import { useEffect, useState } from "react"
import { ItemList } from "../itemList/ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const Kids = () =>{


    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {genreId} = useParams();

    useEffect(() => {
        setLoading(true);

        setLoading(true)
        
        const productosRef = collection(db, "products")
        const q = genreId ? query(productosRef, where("genre", "==", genreId)) : productosRef
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
    },[genreId])

    return(
        <section className='sections'>
            <h2 className="sections__h2">{genreId}</h2>
            
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
