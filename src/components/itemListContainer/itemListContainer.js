import { useEffect, useState } from 'react';
import './itemListContainer.scss';
import { ItemList } from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

export const ItemListContainer = () =>{


    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    

    useEffect(() => {
        
        setLoading(true)
        
        //1- armar la referencia
        const productosRef = collection(db, "products")
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef
        //2- (async) llamar a firebase con la referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id:doc.id,
                        ...doc.data()
                    }
                })
                setItems(newItems)
            })
            .finally(()=>{
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