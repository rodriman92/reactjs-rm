import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGRtI9DLw4-FK9mGvCZRSk8wUyQwWsoic",
  authDomain: "snkrs-world.firebaseapp.com",
  projectId: "snkrs-world",
  storageBucket: "snkrs-world.appspot.com",
  messagingSenderId: "1025925938359",
  appId: "1:1025925938359:web:45b3b3d9fa437773f0e132"
};


//defino una constante app para acceder a la configuracion de firebase desde otros componentes
const app = initializeApp(firebaseConfig);

//variable para acceder a la base de datos de firebase desde otros componentes
export const db = getFirestore(app);

//variable para acceder a las credenciales de usuarios desde otros componentes
export const auth = getAuth();

export default app;
