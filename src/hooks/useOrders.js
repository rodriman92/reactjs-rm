import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export const useOrders = () =>{

    const [items, setItems] = useState([]);

    const {auth} = useAuthContext();

    const {buyer} = useParams();

    useEffect( () =>{
        const ordersRef = collection(db, "orders")
        const q = buyer ? query(ordersRef, where("buyer", "==", auth.userId)) : ordersRef
        getDocs(q)
            .then((resp) => {
                const newOrders = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()

                    }
                })
                setItems(newOrders)
            })
    },[auth.userId])


    return({
        items, buyer
    })
    
}
