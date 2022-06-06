import { useState, useEffect } from "react"

export const Counter2 = () =>{

    const [contador, setContador] = useState(1);


    const incrementar = () =>{
        setContador(contador + 1)
    }


    //hook useEffect modifica en montaje y cada vez que cambia el render de contador
    useEffect(() => (
        console.log("Componente montado")

    ), [])

    useEffect(() => {
        console.log("Componenete actualizado")
    },[contador])

    return(
        <div className="container my-5">
            <h2>Counter</h2>
            <hr/>
            <button className="btn btn-primary" onClick={incrementar}>Click me!</button>
            <hr/>
            <h4>{contador}</h4>
            <hr/>
            <span>Fecha y hora del ultimo click: {new Date().toLocaleString()}</span>
        </div>
    )
}
