import { useContext, useEffect, useState } from "react";
import { CartStyle } from "./style.js";
import { ProductsContext } from "../../context/productsContext.jsx";

export const Cart = () => {
  const { cartProducts, setCartProducts, setShowCart } =
    useContext(ProductsContext);

    const [total, setTotal] = useState(0)

  useEffect(() => {
    if (cartProducts){
        const total = cartProducts.reduce((acc, act) => acc + (act.price * act.quantity),0)
        setTotal(total)
    }
  }, [cartProducts]);

  return (
    <CartStyle>
      <div className="cart">
        <div className="headerCart">
          <button className="btnCloseModal" onClick={() => setShowCart(false)}>X</button>
          <p>Carrinho de Compras</p>
        </div>
        <div className="productsCart">
          {cartProducts ? (
            <ul className="cartWithProducts">
              {cartProducts.map((product) => {
                const totalPriceProduct = product.quantity * product.price
                if (product.quantity == 0) return;
                return (
                  <li>
                    <div className="imgCart">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="productsInfoCart">
                      <p>{product.name}</p>
                      <div className="quantityDiv">
                        <button
                          onClick={() => {
                            const productIndex = cartProducts.findIndex(
                              (elem) => elem._id === product._id
                            );
                            const copy = cartProducts;
                            copy[productIndex].quantity--;
                            setCartProducts([...copy]);
                            localStorage.setItem("@CART", JSON.stringify(copy));
                          }}
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => {
                            const productIndex = cartProducts.findIndex(
                              (elem) => elem._id === product._id
                            );
                            const copy = cartProducts;
                            copy[productIndex].quantity++;
                            setCartProducts([...copy]);
                            localStorage.setItem("@CART", JSON.stringify(copy));
                          }}>+</button>
                      </div>
                      <p>{totalPriceProduct.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}</p>
                      <button onClick={() => {
                            const productIndex = cartProducts.findIndex(
                              (elem) => elem._id === product._id
                            );
                            const copy = cartProducts;
                            copy.splice(productIndex, 1)
                            setCartProducts([...copy]);
                            localStorage.setItem("@CART", JSON.stringify(copy));
                          }}>Remover</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="emptyCart">
              <h1>Carrinho Vazio</h1>
              <button>Retornar às Compras</button>
            </div>
          )}
        </div>
        <div className="totalCart">
            <p>Total</p>
            <span>{total.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}</span>
        </div>
        <button className="checkoutButton">Finalizar Compra</button>
      </div>
    </CartStyle>
  );
};
