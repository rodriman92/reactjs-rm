import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

export const CartProvider = ({children}) =>{
    

    // custom hook que administra la logica del local storage
    const [cart, setCart] = useLocalStorage("cart");

    const addItem = (item) => {
      setCart([...cart, item])
    }

    //Uso el useEffect para persistir los datos del carrito en localstorage
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    },[cart])

    //funcion que sirve para encontrar duplicados en el carrito
    const isincart = (id) =>{
      return cart.some( (prod) => prod.id === id);
    }


    //calculo la suma total del producto * cantidad
    const totalPrice = () => {
      if(cart === 0){
        return null
      } else{

        return cart.reduce( (acc, prod) => acc += (prod.price * prod.cantidad), 0);
      }
    }

    //funcion para calcular la cantidad total de items en el carrito
    const totalQuantity = () => {
      return cart.reduce( (acc, prod) => acc += prod.cantidad,0)
    }

    //seteo el carrito vacio
    const emptyCart = () =>{
      setCart([]);
    }

    //remuevo el item cuyo id coincida con el parametro id
    const removeItem = (id) =>{
        setCart( cart.filter((prod) => prod.id !== id)  )
    }


    return (

        <CartContext.Provider value={

            {   cart, 
                addItem, 
                isincart, 
                totalPrice, 
                totalQuantity, 
                emptyCart,
                removeItem
            }
            }>

            {children}

        </CartContext.Provider>
    )

}