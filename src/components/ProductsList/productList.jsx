import { useContext, useEffect } from "react";
import { ProductListStyle } from "./style";
import { ProductsContext } from "../../context/productsContext";

export const ProductsList = () => {
  const { products, selectedCategory, setCartProducts, cartProducts, setItemsPerPage } =
    useContext(ProductsContext);

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <ProductListStyle>
      <div className="upperUlProducts">
              <h3>{selectedCategory?.toUpperCase() || "Produtos"}</h3>
              <select onChange={(e) => setItemsPerPage(+e.target.value)} name="productsPerPage" id="productsPerPage">
                  <option value="10" selected disabled hidden>Itens por página</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
              </select>
      </div>
      <div className="liProducts">
        {products?.map((product) => (
          <li>
            <div className="productImg">
              <img src={product.img} alt="" />
            </div>
            <div className="infosProduct">
              <p>{product.name}</p>
              {product.discont ? (
                <>
                  <p className="oldPrice">
                    {product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <span>
                    {product.discontPrice.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </>
              ) : (
                <p>
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}
              <button
                onClick={() => {
                  const productIndex = cartProducts.findIndex(
                    (elem) => elem._id === product._id
                  );
                  const copy = cartProducts;
                  if (productIndex !== -1) {
                    const copy = cartProducts;
                    copy[productIndex].quantity += 1;
                    setCartProducts([...copy]);
                    localStorage.setItem("@CART", JSON.stringify(copy));
                  } else {
                    copy.push({ ...product, quantity: 1 });
                    setCartProducts([...copy]);
                    localStorage.setItem("@CART", JSON.stringify(copy));
                  }
                }}
              >
                Comprar
              </button>
            </div>
          </li>
        ))}
          </div>
    </ProductListStyle>
  );
};
