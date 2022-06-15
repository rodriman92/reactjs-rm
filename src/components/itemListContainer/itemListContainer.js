import { useEffect, useState } from 'react';
import './itemListContainer.scss';
import { pedirDatos } from '../../mock/pedirDatos';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const ItemListContainer = () =>{


    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

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
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <h2 className='sections__h2'>NEW RELEASE</h2>
            </Link>
            <div className='container my-5 navCategory'>
                <Link style={{textDecoration: 'none'}} to={'/'} className="navCategoryItem">ALL</Link>
                <Link style={{textDecoration: 'none'}} to={'/category/sport'} className="navCategoryItem">SPORT</Link>
                <Link style={{textDecoration: 'none'}} to={'/category/urban'} className="navCategoryItem">URBAN</Link>
                <Link style={{textDecoration: 'none'}} to={'/category/casual'} className="navCategoryItem">CASUAL</Link>
            </div>
            {
                loading 
                ?   <Loader />
                :   <ItemList items={items}/>
            
            }
        </section>
    )
}