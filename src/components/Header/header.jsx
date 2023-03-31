import { HeaderStyle } from "./style";
import Logo from "../../images/logo.png";
import { BsSearch, BsBasket } from "react-icons/bs";

export const Header = () => {
  return (
    <HeaderStyle>
      
      <img className="logoHeader" src={Logo} alt="Logo do mercado" />
        <div className="rightHeader">
        <input type="text" name="" id="" placeholder="Busque por um produto" />
        <BsBasket className="basketButton"/>
        </div>
    </HeaderStyle>
  );
};
