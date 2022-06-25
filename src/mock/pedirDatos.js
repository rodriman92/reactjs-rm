import { productos } from "./data";

 export const pedirDatos = (retornar) => {
        return new Promise( (resolve, reject) => {

            setTimeout(() => {
                if(retornar){
                    resolve(productos)
                }
                else{
                    reject("Rechazada")
                }
            }, 4000);
        })
    }