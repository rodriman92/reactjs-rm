import { createContext, useContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

export const CartProvider = ({children}) =>{

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || '[]');

    // defino el valor del carrito por defecto 

    const [cart, setCart] = useState(cartFromLocalStorage)

    //agrego el item al carrito
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
      return cart.reduce( (acc, prod) => acc += (prod.price * prod.cantidad), 0);
    }

    //funcion para calcular la cantidad total de items en el carrito
    const totalQuantity = () => {
      if (cart.length > 0)
      return cart.reduce( (acc, prod) => acc += prod.cantidad,0)
      else return 0
    }

    //seteo el carrito vacio
    const emptyCart = () =>{
      setCart([]);
      localStorage.clear()

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