import { Link } from 'react-router-dom';
import "./CategoryDropdown.scss"
export const CategoryDropdown = () =>{
    
    return(
        <div className='containerFilter'>
            <ul className='listaCategorias'>
                <Link style={{textDecoration: 'none'}} to={'/'}><li className='itemCategoria'>Ver todo</li></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/sport'}><li className='itemCategoria'>Deportes</li></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/urban'}><li className='itemCategoria'>Urbano</li></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/casual'}><li className='itemCategoria'>Casual</li></Link>
            </ul>
        </div>
        
    )
}