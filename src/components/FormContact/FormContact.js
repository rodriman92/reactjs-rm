import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSweetAlert } from '../../hooks/useSweetAlert';

export const FormContact = () => {

    const schema = Yup.object().shape({
        nombre: Yup.string()
                    .required("Este campo es obligatorio")
                    .min(4, "El nombre es demasiado corto")
                    .max(30, "Maximo 30 caracteres"),
        email: Yup.string()
                    .required("Este campo es obligatorio")
                    .email("Formato de email invalido"),

        asunto: Yup.string()
                    .required("Este campo es requerido")
                    .min(4, "El asunto es demasiado corto")
                    .max(20, "El asunto no puede superar los 20 caracteres"),


        mensaje: Yup.string()
                        .required("Este campo es obligatorio")
                        .min(10, "El mensaje es demasiado corto")
                        .max(100, "Maximo 100 caracteres"),
    })



    const {showToast} = useSweetAlert("Mensaje enviado", "success", "top-center")
    
    return (

        <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    asunto: '',
                    mensaje: ''
                }}
                validationSchema={schema}
                onSubmit={(values, { resetForm }) => {
                    showToast();
                    resetForm();
              }}
                
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
                    placeholder="usuario@mail.com"
                    className="form-control my-2 checkoutInput"
                />
                {formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>}


                <input
                    value={formik.values.asunto}
                    name="asunto"
                    onChange={formik.handleChange}
                    type={"text"}
                    placeholder="Consulta Nike Air Max 290"
                    className="form-control my-2  checkoutInput"
                    
                />
                {formik.errors.asunto && <p className='alert alert-danger'>{formik.errors.asunto}</p>}

                <textarea 
                    value={formik.values.mensaje}
                    onChange={formik.handleChange}
                    name="mensaje"
                    className="form-control my-2 checkoutInput">

                </textarea>
                {formik.errors.mensaje && <p className='alert alert-danger'>{formik.errors.mensaje}</p>}
                <button type="submit" className='btn btn-success btnConfirm' >Enviar mensaje</button>
                
            </form>
                )
            }
        </Formik>
    )
}