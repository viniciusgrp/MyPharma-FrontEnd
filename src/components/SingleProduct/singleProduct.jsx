import { useContext, useEffect, useState } from "react";
import { ProductStyle } from "./style";
import { ProductsContext } from "../../context/productsContext";

export const SingleProduct = ({ product }) => {
  const {cartProducts, setCartProducts} = useContext(ProductsContext)
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);

  const handleBuyProduct = () => {
    const productIndex = cartProducts.findIndex((elem) => elem._id === product._id)
    const copy = cartProducts
    if (productIndex !== -1) {
      copy[productIndex].quantity += quantity
    } else {
      copy.push({...product, quantity: quantity})
    }
    setCartProducts([...copy])
    localStorage.setItem("@CART", JSON.stringify(copy))
  }

  return (
    <ProductStyle>
      {product && (
        <>
          <div className="img">
            <img src={product.img} alt="Imagem do produto" />
          </div>
          <div className="productInfos">
            <h1>{product.name}</h1>
            {product.discont ? (
              <>
                <span>{product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}</span>
                <p>{product.discontPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}</p>
              </>
            ) : (
              <p>{product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}</p>
            )}
            <p className="quantityInStock">{product.quantityStock} disponíveis</p>
            <div className="buyProduct">
              <div className="selectQuantity">
                <button disabled={quantity == 1} onClick={() => setQuantity(quantity - 1)}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="buyButton" onClick={() => handleBuyProduct()}>Comprar</button>
            </div>
          </div>
        </>
      )}
    </ProductStyle>
  );
};
