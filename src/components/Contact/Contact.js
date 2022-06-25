import { useState } from "react";


export const Contact = () =>{

    const [values, setValues] = useState({
        nombre: '',
        email: ''
    })


    const handleInputChange = (e) =>{


        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log(values)
    }
    return(
        <div className="container my-5">
            <h2>CONTACTO</h2>

            <hr/>

            <form onSubmit={handleSubmit}>
                <h4>Datos Personales</h4>

                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    placeholder="Nombre"
                    type={'text'}
                    className={'form-control'}
                />

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    placeholder="apellido"
                    type={'email'}
                    className={'form-control'}
                />

                <button
                    type={"submit"}
                    onClick={handleSubmit}
                >Enviar</button>
            </form>
        </div>
    )
}