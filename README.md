# SNKRS WORLD 👟
- Sitio web ecommerce que permite realizar la compra de zapatillas. Cuenta con un sistema de        autenticacion, la cual es olbigatoria para ingresar al sitio. Una vez ingresado, el usuario podrá navegar dentro de las diferentes secciones (novedades, hombres, mujeres, niños y ofertas) y visualizar los diferentes pares de zapatillas pertenecientes a cada categoria. El sitio permite agregar zapatillas al carrito y realizar el checkout de la compra, en el cual se obtiene el nro de orden de compra generado

## Datos del proyecto
### Desarrollado por: Rodrigo Mancilla
### Curso: React JS - Coderhouse
### Profesor: Conrado Lanusse
### Tema: Creacion de ecommerce

## Estructura del proyecto:

### Rutas
- El sitio contiene rutas publicas (que redirige al login)  y privadas, las cuales solamente seran visibles para los usuarios que esten registrados en la base de datos de usuarios de firebase.

### Login 
- Permite al usuario iniciar sesion o registrarse, utilizando la autenticacion  de Google Auth de Firebase. Permite inicio de sesion con cuenta de Google.

### Secciones

- Novedades: Lista la totalidad de los productos que se encuentran en la base de datos de firebase. Permite realizar filtrado por categorias (casual, urbano y deportes) y ademas permite el usuario obtener una previsualizacion del producto, su precio y el nombre. Cada item esta listado en forma de card, la cual contiene un boton de "ver producto" el cual permite ver el detalle de cada producto en particular. Esta caracterista se encuentra presente en todas las secciones del sitio.

- Hombres: Lista la totalidad de productos de la base de datos, cuyo genero sea "men". Cuenta con un banner personalizado para la seccion.

- Mujeres: Lista la totalidad de productos de la base de datos, cuyo genero sea "women". Cuenta con un banner personalizado para la seccion.

- Niños: Lista la totalidad de productos de la base de datos, cuyo genero sea "kids". Cuenta con un banner personalizado para la seccion.

- Ofertas: Lista la totalidad de productos de la base de datos, cuya propiedad "sale" tenga un valor true. Cuenta con un banner personalizado para la seccion.

- Contacto: Formulario de contacto para que el cliente se comunique con el soporte

### Usuario

- Panel de usuario que permite revisar las ordenes de compra realizadas por el mismo.

### Detalle del produecto

- Permite visualizar en detalle la informacion de cada producto en particular. Dentro del mismo se puede observar: categoria, genero, titulo, descripcion, precio y un modulo que contiene un contador de productos, el cual tiene como condicion obtener desde la base de datos el stock max y el stock minimo para aplicar efectos al seleccionar la cantidad (deshabilitado cuando el stock min esta por debajo de la cantidad que se desea comprar) y un boton para realizar la compra. Una vez realizada la compra se desmonta el componente con el contador controlando que el producto no se repita en el carrito, y se monta el componente de ir al checkout o en la parte superior de la vista, la opcion de "volver" para elegir otro producto.

### Carrito

- Contiene un widget dentro de la barra de navegacion, el cual se muestra siempre y cuando la cantidad dentro del carrito sea mayor a 0. Al hacer click en el widgte, se monta un componente que muestra al usuario el detalle de los productos dentro del carrito de compras, permitiendo visualizar la imagen del producto, el titulo, el precio, la cantidad y el precio total. En la parte inferior del componente, se puede visualizar la cantidad total de items en el carrito y el precio final de la compra, obteniendose de la suma total de los precios totales de los productos. El mismo se almacena en localstorage, permitiendo al usuario continuar con la compra en otro momento.
Contiene botones para permitir al usuario eliminar un item del carrito o directamente vaciarlo. Tambien permite agregar items al carrito antes de finalizar la compra o, si el usuario esta de acuerdo con lo elegido, pasar al checkout.

### Checkout

- Muestra al usuario un resumen del carrito y un formulario para realizar la compra. Una vez validados los datos y finalizado el checkout, se desmonta la vista de checkout y aparece una nueva vista que tiene un mensaje con el numero de id de orden, el cual se obtiene de la base de datos, confirmando la compra del usuario. Realizada esta operacion, se actuliza el stock en cada producto restando las cantidades compradas por el usuario. Contiene un boton de "volver a inicio" el cual lleva el usuario a la seccion "Novedades" para que pueda realizar otra compra si asi lo desea.


### Custom Hooks
- useProductos: realiza las operaciones de consulta a la base de datos de firebase dentro de la coleccion de productos. Permite aplicar condiciones utilizando where para determinar el tipo de dato filtrado.

- useOrdenes: realiza la operacion de generar una orden con los items del carrito una vez finalizada la compra. La misma se agrega a la base de datos dentro de la coleccion "ordenes" y a su vez realiza una actualizacion de stock de cada producto que se encontraba en el carrito, utilizando un batch para realizar multiples operaciones en conjunto.

- useSweetAlert: permite ejecutar una alerta en forma de toast cuando se realizan diferentes acciones dentro del sitio(agrega producto, login, registro). Recibe como parametros el mensaje, icono y la posicion de la alerta, la cual varia dependiendo el tipo de mensaje a mostrar.

Este proyecto fue realizado con [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Ejecuta la aplicacion en modo desarrollador.\
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para visualizarla.

## Librerias y frameworks

- Bootstrap
- Firebase
- Formik
- Yup
- Sweet alert

## Gestor de paquetes
- NPM

## Control de versiones
- GIT


## Instalacion

Instala [npm](https://www.npmjs.com/) para ejecutar SNKRS WORLD.

```bash
npm run react-mancilla
```


## Previsualizacion

[Click aqui](https://snkrs-world-rodriman92.vercel.app/) para visitar el sitio



## Licencia
[MIT](https://choosealicense.com/licenses/mit/)

