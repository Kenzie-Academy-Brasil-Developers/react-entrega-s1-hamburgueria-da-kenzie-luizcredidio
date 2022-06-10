import "./App.css";
import Header from "./components/header";
import ProductList from "./components/productList";
import Cart from "./components/cart";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const [newBuy, setNewBuy] = useState([]);
  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => {
        setProducts(response);
        setFilteredProducts(response);
      })
      .catch((erro) => console.log(erro));
  }, []);

  function newProductList(searchValue) {
    let filteredList = products.filter(
      (product) =>
        product.name.toLowerCase() === searchValue.toLowerCase() ||
        product.category.toLowerCase() === searchValue.toLowerCase()
    );
    setFilteredProducts(filteredList);
  }

  function newCartList(id, product) {
    if (currentSale.includes(product)) {
      return console.log("Porduto ja foi adicionado ao carrinho!");
    } else {
      let productAdd = products.find((product) => product.id === id);
      let newProduct = [...currentSale, productAdd];
      setNewBuy(newProduct);
    }
  }
  function removeAll() {
    setCurrentSale([]);
  }
  function removeFromCart(productToRemove) {
    setCurrentSale(currentSale.filter((elem) => elem !== productToRemove));
  }

  useEffect(() => {
    setCurrentSale(newBuy);
  }, [newBuy]);

  useEffect(() => {
    if (newSearch === "") {
      setFilteredProducts(products);
    } else {
      newProductList(newSearch);
    }
  }, [newSearch]);

  return (
    <div className="App">
      <Header
        // newProductList={newProductList}
        setNewSearch={setNewSearch}
        newSearch={newSearch}
      />
      <main>
        <ProductList
          filteredProducts={filteredProducts}
          newCartList={newCartList}
        />
        <Cart
          currentSale={currentSale}
          removeFromCart={removeFromCart}
          removeAll={removeAll}
        />
      </main>
    </div>
  );
}

export default App;
