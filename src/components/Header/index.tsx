import React from "react";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import "./styles.css";
import Icon from "../../assets/icon.png";
import Logo from "../../assets/logo.png";

export const Header: React.FC = () => {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });
  return (
    <header className="headerContainer">
      <img src={Icon} alt="icon" />

      <p>A melhor plataforma de emails.</p>
      <img className="logo" src={Logo} alt="logo" />
      <span>{currentDate}</span>
    </header>
  );
};

export default Header;
