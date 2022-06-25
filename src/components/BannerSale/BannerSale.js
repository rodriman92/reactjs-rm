import '../Banner/Banner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const BannerSale = ({img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} alt={img.value} className='card-img-top'></img>
            <h1 className='captionBanner'>OFERTAS</h1>

        </div>
    )
}


