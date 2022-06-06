import './BannerKids.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const BannerKids = ({img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} alt={img.value} className='card-img-top'></img>
        </div>
    )
}


