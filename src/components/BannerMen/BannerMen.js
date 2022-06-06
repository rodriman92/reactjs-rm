import './BannerMen.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



export const BannerMen = ({img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} className='card-img-top'></img>
        </div>
    )
}


