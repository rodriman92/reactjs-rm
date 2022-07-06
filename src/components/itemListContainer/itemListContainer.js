import './itemListContainer.scss';
import { ItemList } from '../itemList/ItemList';
import { Loader } from '../Loader/Loader';
import { useProductos } from '../../hooks/useProductos';
import { CategoryDropdown } from '../CategoryDropdown/CategoryDropdown';

export const ItemListContainer = () =>{

    const { items, loading } = useProductos("category", "==", "categoryId")

    return (
        <section className='sections'>
            <div className='container my-5 navCategory'>
            <CategoryDropdown />

            </div>
            {
                loading 
                ?   <Loader items={loading} />
                :   <ItemList items={items}/>
            
            }
           
        </section>
        
    )
}