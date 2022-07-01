
import { FormContact } from '../FormContact/FormContact';
import '../Banner/Banner.scss';
import './Contact.scss'

export const Contact = () =>{

    return(
        <>
        <div className="bannerContainer">
            <img src='https://firebasestorage.googleapis.com/v0/b/snkrs-world.appspot.com/o/banners%2Fcontact.png?alt=media&token=f8cb3e77-71c7-4245-b97a-f2a7cf04c0b6' alt='banner contact' className='card-img-top'></img>
            <h1 className='captionBanner'>CONTACTO</h1>
        </div>
        <div className='formContainer'>
            <FormContact />
        </div>
        </>
    )
}