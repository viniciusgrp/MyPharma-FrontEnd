import { FooterStyle } from "./style";
import { GoLocation } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterStyle>
      <div className="leftFooter">
        <a href="">Contato</a>
        <a href="">Trabalhe Conosco</a>
        <a href="">SAC</a>
      </div>
      <ul className="infosMarket">
        <li>
          <GoLocation />
          <p>Avenida Ayrton Senna nº 1.993 - Autódromo - São Paulo - SP</p>
        </li>
        <li>
          <AiOutlinePhone />
          <p>(11) 9 8406-7896</p>
        </li>
        <li>
          <AiOutlineMail />
          <p>contato@mercado.com.br</p>
        </li>
      </ul>
    </FooterStyle>
  );
};
