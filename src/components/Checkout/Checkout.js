import './Checkout.scss';
import { Link, Navigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import app from '../../firebase/config'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Table } from 'react-bootstrap';
import { getAuth } from 'firebase/auth';
import { useOrdenes } from '../../hooks/useOrdenes';


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

    const auth = getAuth(app);

    //almaceno el email del usuario ingresado en la variable user
    
    const user = auth.currentUser.email;

    const {cart, totalPrice, emptyCart} = useCartContext();

    const {orderId, generarOrden } = useOrdenes();

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
        <>
            <h2 className="titleCheckout">Checkout</h2>
            
            <div className="containerCheckout">
            <div className='checkoutResumen container my-5'>

                <h3 className='titleResumen'>Resumen del carrito </h3>
                
                {
                    cart.map((item) => (
                        <div className='tableContainer'>
                            <p className='pUser'>Usuario: {user}</p>
                            <Table striped bordered hover size="sm">
                                <thead className='headResume'>
                                    <tr>
                                        <th className='colProducto'>Producto</th>
                                        <th className='colCantidad'>Cantidad</th>
                                        <th className='colPrecio'>Precio</th>
                                    </tr>
                                </thead>
                                <tbody className='bodyResume'>
                                    <tr>
                                        <td className='bodyContent'>{item.title}</td>
                                        <td className='bodyContent'>{item.cantidad}</td>
                                        <td className='bodyContent'>${item.price * item.cantidad}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                    ))
                    
            }
            <p className='totalCarrito'>TOTAL DE LA COMPRA: ${totalPrice()}</p>
            </div>
            <img src='https://images.unsplash.com/photo-1559050993-d4e4fbf11769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='zapatillas nike azules' className='img-fluid imgCheckout' />
            <div className='checkoutForm'>
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
                            <label className='labelInfo'>Datos del comprador</label>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Juan Pérez"
                            className="form-control my-2  checkoutInput"
                            
                        />
                        {formik.errors.nombre && <p className='errorForm'>{formik.errors.nombre}</p>}

                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            type={"email"}
                            placeholder="usuario@mail.com"
                            className="form-control my-2 checkoutInput"
                        />
                        {formik.errors.email && <p className='errorForm'>{formik.errors.email}</p>}


                        <input
                            value={formik.values.direccion}
                            onChange={formik.handleChange}
                            name="direccion"
                            type={"text"}
                            placeholder="Madrid 91218"
                            className="form-control my-2 checkoutInput"
                        />
                        {formik.errors.direccion && <p className='errorForm'>{formik.errors.direccion}</p>}
                        <div className='btnCheckoutContainer'>
                            <button type="submit" className='btn btn-success btnConfirm' >Comprar</button>
                            <button onClick={emptyCart} className="btn btn-danger btnCheckoutCancel">Cancelar</button>
                        </div>
                        
                    </form>
                        )
                    }
                </Formik>
            </div>

        </div>
        </>    
    )
}