import { useEffect, useState } from "react"

export const PokeApi = () =>{

    // //*Ejemplo de API con query params
    // const busqueda = 'perros'
    // const url = `https://api.giphy.com/v1/gifs/search?api_key=1234&q=${busqueda}&limit=10`;

    // //*Ejemplo de API con url params
    // const url2= 'https://api.coderhouse.com/alumnos/12366';

    // fetch(url, {
    //     method: 'POST',
    //     headers: {

    //         'Api_token': 'RMANCILLA2324'
    //     },
    //     body: JSON.stringify({
    //         id: 12345,
    //         name: 'Rodrigo',
    //         status: 'Active',
    //         course: ['UX/UI', 'React JS']
    //     })
    // });

    const [pokemon, setPokemon] = useState(null);

    const [id, setId] = useState(1);

    const [input, setInput] = useState("");

    console.log(pokemon)

    const handleSiguiente = () =>{
        setId(id + 1);
    }

    const handleAnterior = () =>{
        if(id > 1){
            setId(id - 1);
        }
    }

    const handleInput = (e) =>{
        setInput(e.target.value());
    }

    console.log(id)
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setInput(data.name)
            setPokemon(data)
        })

    },[id, input])

    return(
        <div className="container my-5">
            <h2>Poke API</h2>
            <hr />

           
            <input type="text" />
            <button type="submit">Buscar</button>
            
            {
                pokemon ? 
                <>
                    
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <button className="btn btn-outline mx-3" onClick={handleAnterior}>Anterior</button>
                    <button className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
                </>
                : null
            }
            

        </div>
        
    )
}