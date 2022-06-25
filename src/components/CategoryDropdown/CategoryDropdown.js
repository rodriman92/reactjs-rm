import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton} from 'react-bootstrap';

export const CategoryDropdown = ({categoryId}) =>{
    return(
        <>
            <h4 className='titleDropdownCategories'>Categorias</h4>
            <DropdownButton id="dropdown-basic-button" title={categoryId} className='dropDownCategories' variant='danger'>
                <Link style={{textDecoration: 'none'}} to={'/'}><Dropdown.Item className='itemDropdown' href="/">Todos</Dropdown.Item></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/sport'}><Dropdown.Item className='itemDropdown' href="/">Deportes</Dropdown.Item></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/urban'}><Dropdown.Item className='itemDropdown' href="/">Urbano</Dropdown.Item></Link>
                <Link style={{textDecoration: 'none'}} to={'/category/casual'}><Dropdown.Item className='itemDropdown' href="/">Casual</Dropdown.Item></Link>
            </DropdownButton>
        </>
        
    )
}