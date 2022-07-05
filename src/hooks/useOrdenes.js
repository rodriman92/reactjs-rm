import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from 'firebase/firestore';
import { useState } from "react"
import { db } from '../firebase/config'
import { useCartContext } from '../context/CartContext';

export const useOrdenes = () => {

    const {cart, emptyCart, totalPrice } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async (values) =>{
        
        const order = {
            buyer: values,
            items: cart.map(({id, cantidad, title, price}) => ({id, cantidad, title, price})),
            totalPrice: totalPrice()
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, "products")
        const ordersRef = collection(db, "orders")
        const q = query(productosRef, where(documentId(), 'in', cart.map((item) => item.id)))
        const outOfStock = []
        const products = await getDocs(q);

        products.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if((doc.data().stockMax) - itemToUpdate.cantidad >= 0) {
                batch.update(doc.ref, {
                    stockMax: doc.data().stockMax - itemToUpdate.cantidad
                })
            } else{
                outOfStock.push(itemToUpdate);
            }
        })

        if(outOfStock.length === 0) {
            addDoc(ordersRef, order)
            .then((doc) => {
                batch.commit()
                setOrderId(doc.id)
                emptyCart(); 
            })
            
        } else{
            
        }
    }
    return{
        orderId,
        generarOrden,
        
        
    }
}