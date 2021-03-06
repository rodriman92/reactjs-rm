import './Banner.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Banner = ({title, img}) =>{
    return(
        <div className="bannerContainer">
            <img src={img} alt={title} className='card-img-top'></img>
            <h1 className='captionBanner'>{title}</h1>
        </div>
    )
}


