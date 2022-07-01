import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import "./CategoryDropdown.scss"
export const CategoryDropdown = () =>{
    return(
        <div className='containerFilter'>
            <h4 className="titleFilter">Filtrar resultados </h4>
            <DropdownButton id="dropdown-basic-button" title="Categorias" className='dropDownCategorias my-4 mx-3' variant='light'>
                <Dropdown.Divider></Dropdown.Divider>
                <Link style={{textDecoration: 'none'}} to={'/'}><Dropdown.Item className='itemDropdown' href="/">Ver todo</Dropdown.Item></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/sport'}><Dropdown.Item className='itemDropdown' href="/">Deportes</Dropdown.Item></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/urban'}><Dropdown.Item className='itemDropdown' href="/">Urbano</Dropdown.Item></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/casual'}><Dropdown.Item className='itemDropdown' href="/">Casual</Dropdown.Item></Link>
            </DropdownButton>
        </div>
        
    )
}