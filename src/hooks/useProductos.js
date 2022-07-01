import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const useProductos = () => {
    
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    useEffect(() => {
        setLoading(true)
        
        const productosRef = collection(db, "products")
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
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
    }, [categoryId])

    return({
        items, loading, categoryId
    })
}