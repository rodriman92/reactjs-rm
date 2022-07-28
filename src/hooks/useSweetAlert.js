import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const useSweetAlert = (title, icon, position) => {


    const MySwal = withReactContent(Swal)

    //funcion que muestra un toast cuando un item se agrega al carrito
    const showToast = () => {
        MySwal.fire({
            title: title,
            icon: icon,
            toast: true,
            background: "#121212",
            color: "#fff",
            position: position,
            timer: 2000,
            showConfirmButton: false,
            
        })
    }

    const showToastError = () => {
        MySwal.fire({
            title: title,
            icon: icon,
            toast: true,
            background: "#121212",
            color: "#fff",
            position: position,
            timer: 2000,
            showConfirmButton: false,
            
        })
    }

    const showToastErrorRegister = () => {
        MySwal.fire({
            title: title,
            icon: icon,
            toast: true,
            background: "#121212",
            color: "#fff",
            position: position,
            timer: 2000,
            showConfirmButton: false,
            
        })
    }



    return{
        showToast,
        showToastError,
        showToastErrorRegister,
        title,
        icon,
        position
    }
}