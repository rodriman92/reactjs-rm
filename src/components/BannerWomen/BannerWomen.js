import './BannerWomen.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const BannerWomen = ({img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} alt={img.value} className='card-img-top'></img>
        </div>
    )
}


