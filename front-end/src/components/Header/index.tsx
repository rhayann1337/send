import React, { useCallback } from "react";
import "./styles.css";
import Logo from "../../assets/logo1.png";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Header: React.FC = () => {
  const history = useHistory();

  const handleOnClickHome = useCallback(() => {
    history.push("/");
  }, [history]);

  const handleOnClickLogin = useCallback(() => {
    history.push("/login");
  }, [history]);

  const handleOnClickCadastro = useCallback(() => {
    history.push("/cadastro");
  }, [history]);
  return (
    <header className="headerContainer">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
          MENU
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item onClick={handleOnClickHome} active>
            Home
          </Dropdown.Item>
          <Dropdown.Item onClick={handleOnClickLogin}>Login</Dropdown.Item>
          <Dropdown.Item onClick={handleOnClickCadastro}>
            Cadastro
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Sobre nós</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Contato</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <img src={Logo} alt="logo" className="logo" />

      <p>A melhor plataforma de emails.</p>
    </header>
  );
};

export default Header;
