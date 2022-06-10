import "./style.css";
export default function Product({ product, newCartList }) {
  return (
      <li className="cardProduct">
        <div className="divImg">
        <img className="imgVitrine" src={product.img} alt={product.name}></img>

        </div>
        <h2 className="productName">{product.name}</h2>
        <p className="productCategory">{product.category}</p>
        <span className="productPrice">RS$ {product.price.toFixed(2)}</span>
        <button
          className="productBtn"
          onClick={() => {
            newCartList(product.id, product);
          }}
        >
          Adicionar
        </button>
      </li>
  );
}
