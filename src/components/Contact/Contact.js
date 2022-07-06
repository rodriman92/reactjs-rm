
import { FormContact } from '../FormContact/FormContact';
import '../Banner/Banner.scss';
import './Contact.scss'

export const Contact = () =>{

    return(
        <>
        <div className="bannerContainer">
            <img src='https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2F3.png?alt=media&token=51a21bfe-addd-40aa-9622-0a3d4d7d6768' alt='banner contact' className='card-img-top'></img>
            <h1 className='captionBanner'>CONTACTO</h1>
        </div>
        <div className='formContainer'>
            <FormContact />
        </div>
        </>
    )
}