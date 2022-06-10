import './style.css'

export default function InputSearch({newProductList, setNewSearch,}){
    return(
        <div className='divInput'>
        <input className="InputSearch"
        type='text'
        placeholder="Digitar Pesquisa"
        onChange={(event) => setNewSearch(event.target.value)}
        >
        </input>
        <button 
        className="btnSearch"
        onClick={() => newProductList()}
        >Pesquisar</button>
        </div>
    )
}


