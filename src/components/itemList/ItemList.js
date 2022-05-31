import '../itemList/ItemList.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Item } from "../Item/Item";


export const ItemList  = ({items}) => {

    return(
        <div>
            {
                items.map((items) => (
                    <div key={items.id} className='cardContainer'>
                        <Item items={items} />
                    </div>
                ))
            }
        </div>
    )
}