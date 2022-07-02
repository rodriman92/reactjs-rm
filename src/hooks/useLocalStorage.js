import { useState, useEffect } from "react";

//funcion que obtiene el valor del carrito almacenado en el local storage

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}


export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    if(localStorage.getItem(key) !== null || (localStorage.getItem(key) !== ""))
    {
      return getStorageValue(key, defaultValue);
    } else{
      return "";
    }

  });

  useEffect(() => {
    
    //seteo el nuevo valor de local storage pasando como parametro la clave y el valor obtenidos
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};