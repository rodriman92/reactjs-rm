import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const useProductos = () => {
    
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {genreId} = useParams();

    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true)
        
        const productosRef = collection(db, "products")
        const q = genreId ? query(productosRef, where("genre", "==", genreId)) : productosRef
        getDocs(q)
            .then((resp) => {
                const newProducts = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                        
                    }
                })
                setItems( newProducts )
                setLoading(false)
            })
    }, [genreId])



    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "products")
        const q2 = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
        getDocs(q2)
            .then((resp) => {
                const categoryProducts = resp.docs.map((doc) => {
                    return{
                        id: doc.id,
                        ...doc.data()
                    }

                    
                })
                setItems( categoryProducts)
                setLoading(false);
            })
    },[categoryId])



    return({
        items, loading, genreId, categoryId
    })
}