import { useEffect, useState } from "react";


export const Counter = () =>{

    //Hook useState

    const [contador1, setContador1] = useState(1)

    const [contador2, setContador2] = useState(1)

    const incrementar1 = () =>{
        setContador1(contador1 + 1)
    }

    const incrementar2 = () =>{
        setContador2(contador2 + 1)
    }

    useEffect(() => {
        console.log("Montaje de Counter")
        //efecto de desmontaje
        return () => {
            console.log("Desmonte de Counter")
        }
    },[])

    useEffect(()=> {
        console.log("actualiza contador 1")
    },[contador1])

    useEffect(() => {
        console.log("Actuliza contador 2")
    }, [contador2])



    return (
        <div className="container my-5"  >
            <h2>Counter</h2>
            <hr/>

            <p onClick={incrementar1}>{contador1}</p>
            <hr/>
            <p onClick={incrementar2}>{contador2}</p>
        </div>
    )
}