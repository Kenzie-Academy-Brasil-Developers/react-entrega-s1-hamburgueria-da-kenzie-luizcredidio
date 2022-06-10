import './style.css'
export default function CardProdcut({product, removeFromCart}){
    return ( 
        <li className='liCart'>
            <img className='cartProductImg' src={product.img} alt={product.name}></img>
            <div className='divNomeProductCart'>
                <h2 className='h2ProductCart'>{product.name}</h2>
                <span className='priceProductCart'>{product.category}</span>
            </div>
            <button className='btnRemoveFromCart' onClick={() => {
                removeFromCart(product)
            }}>Remover</button>
        </li>
    )
}