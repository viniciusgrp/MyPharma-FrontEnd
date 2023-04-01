import { HeaderStyle } from "./style";
import Logo from "../../images/logo.png";
import { BsBasket } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  const { cartProducts, setShowCart, setNameSearch } = useContext(ProductsContext);

  const [productsInCart, setProductsInCart] = useState(0);
  const [input, setInput] = useState("")

  const handleSearch = () => {
    setNameSearch(input)
  }

  useEffect(() => {
    if (cartProducts) {
      console.log(cartProducts);
      const total = cartProducts.reduce((acc, act) => acc + act.quantity, 0);
      setProductsInCart(total);
    }
  }, [cartProducts]);

  return (
    <HeaderStyle>
      <img className="logoHeader" src={Logo} alt="Logo do mercado" />
      <div className="rightHeader">
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
        }}>
          <input
            type="text"
            placeholder="Busque por um produto"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
        <div onClick={() => setShowCart(true)} className="cartHeader">
          <BsBasket
            
            className="basketButton"
          />
          {cartProducts.length > 0 && <p>{productsInCart}</p>}
        </div>
      </div>
    </HeaderStyle>
  );
};
