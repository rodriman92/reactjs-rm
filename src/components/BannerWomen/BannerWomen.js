import '../Banner/Banner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const BannerWomen = ({img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} alt={img.value} className='card-img-top'></img>
            <h1 className='captionBanner'>MUJERES</h1>
        </div>
    )
}


