import { useEffect, useState } from 'react';
import './itemListContainer.scss';
import {Spinner} from 'react-bootstrap';
import { pedirDatos } from '../../mock/pedirDatos';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const ItemListContainer = ({title, content}) =>{

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    console.log(categoryId)

    useEffect(() => {
        
        setLoading(true)

        pedirDatos(true)
        .then((resp) => {
            if(!categoryId) {
                setItems(resp);
            } else{
                setItems ( resp.filter (( item ) => item.category === categoryId) );
            }

        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    return (
        <section className='sections'>
            <Link style={{textDecoration: 'none'}} to={"./"}>
                <h2 className='sections__h2'>{title}</h2>
            </Link>
            <p className='sections__p'>{content}</p>
            
            <div className='container my-5 navCategory'>
                <Link style={{textDecoration: 'none'}} to={'/'} className="navCategoryItem">ALL</Link>
                <Link style={{textDecoration: 'none'}} to={'/category/sport'} className="navCategoryItem">SPORT</Link>
                <Link style={{textDecoration: 'none'}} to={'/category/urban'} className="navCategoryItem">URBAN</Link>
                <Link style={{textDecoration: 'none'}} to={'/category/casual'} className="navCategoryItem">CASUAL</Link>
            </div>
            {
                loading 
                ?   <Spinner size='xl' role="status" variant='danger' className='spinnerNewRelease'>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                
                :
                <>
                
                    <ItemList items={items}/>
                    
                    
                </>
                
            }
            
        </section>
    )
}