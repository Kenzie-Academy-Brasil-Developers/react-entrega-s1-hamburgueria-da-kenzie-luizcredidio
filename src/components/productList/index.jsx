import './style.css'
import Product from "./product";

export default function ProductList({filteredProducts, newCartList}){
    return (
        <ul className='vitrine'>
            {
                filteredProducts.map((product) => (<Product key={product.id} product={product} newCartList={newCartList}/>))
                  
            }
        </ul>
    )
}