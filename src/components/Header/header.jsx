import { HeaderStyle } from "./style";
import Logo from "../../images/logo.png";
import { BsBasket } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { cartProducts, setShowCart, setNameSearch, resetFilters } =
    useContext(ProductsContext);

  const [productsInCart, setProductsInCart] = useState(0);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setNameSearch(input);
    setInput("");
  };

  useEffect(() => {
    if (cartProducts) {
      const total = cartProducts.reduce((acc, act) => acc + act.quantity, 0);
      setProductsInCart(total);
    }
  }, [cartProducts]);

  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <img
        onClick={() => {
          resetFilters();
          navigate("/");
        }}
        className="logoHeader"
        src={Logo}
        alt="Logo do mercado"
      />
      <div className="rightHeader">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            placeholder="Busque por um produto"
            value={input}
            onChange={(e) => setInput(e.target.value.toUpperCase())}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <div onClick={() => setShowCart(true)} className="cartHeader">
          <BsBasket className="basketButton" />
          {cartProducts.length > 0 && <p>{productsInCart}</p>}
        </div>
      </div>
    </HeaderStyle>
  );
};
