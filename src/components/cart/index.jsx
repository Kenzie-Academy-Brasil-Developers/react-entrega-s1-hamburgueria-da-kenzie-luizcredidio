import CardProdcut from "./cardProduct"
import CardTotal from './cardTotal'
import './style.css'
export default function Cart({currentSale, removeFromCart, removeAll}){
    return (
        <div className="cartSection">
            <p className="tituloCarrinho">Carrinho de compras</p>
            {
                currentSale.length > 0 ? (
                    <>
                        <ul className="ulCart">
                            {currentSale.map((product) => (
                            <CardProdcut 
                                key={product.id} 
                                removeFromCart={removeFromCart} 
                                product={product}/>
                            ))}
                        </ul>
                        <CardTotal currentSale={currentSale} removeAll={removeAll}/>
                    </>
                ) : (
                    <div className="emptyCart">
                    <h2 className="emptyBag">Sua Sacola está vazia</h2>
                    <span className="addSpan">Adicione Itens</span>
                    </div>
                )
            }
            
        </div>
    )
}