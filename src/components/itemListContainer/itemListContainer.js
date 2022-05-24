import './itemListContainer.scss';



export const ItemListContainer = ({title, content}) =>{
    return (
        <section className='sections'>
            <h2 className='sections__h2'>{title}</h2>
            <p className='sections__p'>{content}</p>
            <hr className='sections__hr' />
        </section>
    )
}