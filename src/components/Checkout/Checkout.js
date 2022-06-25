import './Checkout.scss';
import { useState } from "react"
import { Link, Navigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from 'firebase/firestore';
import { db } from '../../firebase/config'
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min(4, "El nombre es demasiado corto")
                .max(30, "Maximo 30 caracteres"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("Formato de email invalido"),

    direccion: Yup.string()
                    .required("Este campo es obligatorio")
                    .min(4, "La direccion es demasiado corta")
                    .max(30, "Maximo 30 caracteres"),
})


export const Checkout = () =>{

    const {cart, totalPrice, emptyCart} = useCartContext();

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

    if(orderId){
        return (
            <div className="container my-5 containerOrderNumber">
                <h2 className='titleOrderNumber'>Gracias por tu compra!</h2>
                <hr />
                <p className='pOrder'>Tu código de compra es <span className='spanOrder'>{orderId}</span></p>

                <Link to={'/'} element={<itemListContainer />} className='btn btn-primary btnBackHome'>Ir al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to="/" />
    }

    return(
        <div className="container my-5 containerCheckout">

            <h2 className="titleCheckout">Checkout</h2>

            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    direccion: ''
                }}
                onSubmit={generarOrden}
                validationSchema={schema}
            >
                
            {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                <input
                    value={formik.values.nombre}
                    name="nombre"
                    onChange={formik.handleChange}
                    type={"text"}
                    placeholder="Juan Pérez"
                    className="form-control my-2  checkoutInput"
                    
                />
                {formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>}

                <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    type={"email"}
                    placeholder="jon@mail.com"
                    className="form-control my-2 checkoutInput"
                />
                {formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>}


                <input
                    value={formik.values.direccion}
                    onChange={formik.handleChange}
                    name="direccion"
                    type={"text"}
                    placeholder="Madrid 91218"
                    className="form-control my-2 checkoutInput"
                />
                {formik.errors.direccion && <p className='alert alert-danger'>{formik.errors.direccion}</p>}
                <button type="submit" className='btn btn-success my-2 btnConfirm mx-5' >Confirmar compra</button>
            </form>
                )
            }
        </Formik>

            <button onClick={emptyCart} className="btn btn-danger my-3 btnCancelBuy mx-5">Cancelar compra</button>

        </div>
    )
}