import './style.css'

export default function CardTotal({removeAll, currentSale}){
    return(
        <>
        <div className='divTotalCart'>
        <h2 className="h2Total">Total</h2>
        <span className="valorTotal">R$ {currentSale.reduce((acc, currentValue) => acc + currentValue.price, 0).toFixed(2)}</span>
        </div>
        <button className="btnRemoveAll" onClick={() => {
            removeAll()
        }}>Remover todos</button>
        </>
    )
}