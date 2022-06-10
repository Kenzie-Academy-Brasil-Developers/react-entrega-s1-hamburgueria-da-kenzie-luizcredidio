import InputSearch from './inputSearch'
import Logo from './logo'
import './style.css'

export default function Header({newProductList, setNewSearch, newSearch}){
    return(
        <header>
            <Logo/>
            <InputSearch newProductList={newProductList} setNewSearch={setNewSearch} newSearch={newSearch}/>
        </header>
    )
}