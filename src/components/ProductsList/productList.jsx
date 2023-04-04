import { useContext, useEffect } from "react";
import { ProductListStyle } from "./style";
import { ProductsContext } from "../../context/productsContext";
import { useNavigate } from "react-router-dom";

export const ProductsList = () => {
  const {
    products,
    selectedCategory,
    setCartProducts,
    cartProducts,
    setItemsPerPage,
    setSort,
    setProductId,
  } = useContext(ProductsContext);
  const navigate = useNavigate();

  return (
    <ProductListStyle>
      <div className="upperUlProducts">
        <h3>{selectedCategory?.toUpperCase() || "PRODUTOS"}</h3>
        <div className="selectsProducts">
          <select
            onChange={(e) => setItemsPerPage(+e.target.value)}
            name="productsPerPage"
            id="productsPerPage"
          >
            <option value="10" selected disabled hidden>
              Itens por página
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
          <select
            onChange={(e) => setSort(e.target.value)}
            name="orderBy"
            id="orderBy"
          >
            <option selected hidden disabled value="">
              Ordenar por
            </option>
            <option value="price">Preço crescente</option>
            <option value="-price">Preço decrescente</option>
            <option value="name">Nome A-Z</option>
            <option value="-name">Nome Z-A</option>
          </select>
        </div>
      </div>
      <div className="liProducts">
        {products?.length &&
          products?.map((product) => (
            <li
              onClick={() => {
                setProductId(product._id);
                navigate("/product");
              }}
            >
              <div className="productImg">
                <img src={product.img} alt="" />
              </div>
              <div className="infosProduct">
                <div className="productName">
                <p>{product.name}</p>
                </div>
                {product.discont ? (
                  <>
                    <p className="oldPrice">
                      {product.price?.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                    <span>
                      {product.discontPrice?.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                  </>
                ) : (
                  <p>
                    {product.price?.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
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
