import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { Table } from "react-bootstrap"
import app from '../../firebase/config';


export const Orders = () => {

    const [items, setItems] = useState([]);

    const auth = getAuth(app);

    const user = auth.currentUser.email;

    const {buyer} = useParams();

    

    useEffect(() => {

        
        const orderRef = collection(db, "orders")
        const q = buyer ? query(orderRef, where("email", "==",  buyer), orderBy("id", "desc")) : orderRef
        getDocs(q)
            .then((resp) => {
                const newProducts = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                        
                    }
                })
                setItems( newProducts )
                console.log(newProducts)
            })
    }, [buyer, user])


    return(
        <div className="container my-5 orderContainer">
            <h2 className="orderContainer__title">Mis Ordenes - {user} </h2>

            {
                items.map((item) => (
                    <Table striped bordered hover id={item.id} >
                        <thead >
                            <tr >
                                <th>ID</th>
                                <th>Usuario</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.buyer.email}</td>
                                <td>{item.totalPrice}</td>
                            </tr>
                        </tbody>
                    </Table>
                ))
            }
            
        </div>
    )
}