import '../Banner/Banner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const BannerMen = ({img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} className='card-img-top' alt='banner seccione hombres'></img>
            <h1 className='captionBanner'>HOMBRES</h1>
        </div>
    )
}


