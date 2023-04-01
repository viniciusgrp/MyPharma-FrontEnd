import { HeaderStyle } from "./style";
import Logo from "../../images/logo.png";
import { BsBasket } from "react-icons/bs";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";

export const Header = () => {
  const { cartProducts } =
    useContext(ProductsContext);
  return (
    <HeaderStyle>
      
      <img className="logoHeader" src={Logo} alt="Logo do mercado" />
        <div className="rightHeader">
        <input type="text" name="" id="" placeholder="Busque por um produto" />
        <div className="cartHeader">
          <BsBasket className="basketButton" />
          {cartProducts.length && <p>{cartProducts.length}</p>}
        </div>
        </div>
    </HeaderStyle>
  );
};
