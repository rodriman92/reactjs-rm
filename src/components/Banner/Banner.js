import './Banner.scss'
import 'bootstrap/dist/css/bootstrap.min.css';



export const Banner = ({title}) =>{
    return(
        <div className="bannerContainer">
            <img src='https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070' alt='Zapatillas Nike Jordan 1 rojas' className='card-img-top'></img>
            <h4 className='bannerTitle'>{title}</h4>
            <button className='btnShopBanner'>SHOP</button>
        </div>
    )
}


