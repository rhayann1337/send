import React, { useCallback, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ModalContato from "../ModalContato";
import EnviarEmailAgendado from "../ModalEmailAgendado";
import EnviarEmail from "../ModalEnviarEmail";
import "./styles.css";

const Menu: React.FC = () => {
  const [show, setShow] = useState(false);
  const [showContato, setShowContato] = useState(false);
  const [showAgendado, setShowAgendado] = useState(false);

  const handleOnClickShowAgendado = useCallback(() => {
    setShowAgendado(true);
  }, []);

  const handleOnCloseAgendado = useCallback(() => {
    setShowAgendado(false);
  }, []);

  const handleOnClickShowContato = useCallback(() => {
    setShowContato(true);
  }, []);

  const handleOnCloseContato = useCallback(() => {
    setShowContato(false);
  }, []);

  const handleOnClick = useCallback(() => {
    setShow(true);
  }, []);

  const handleOnClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <div className="container-menu">
      <div className="searchContainer">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      <div className="optionsContainer">
        <Button
          onClick={handleOnClick}
          className="btnNovo"
          variant="outline-light"
          size="sm"
        >
          Enviar
        </Button>
        <Button className="btnEntrada" variant="outline-light" size="sm">
          Caixa de entrada
        </Button>
        <Button
          onClick={handleOnClickShowContato}
          className="btnContatos"
          variant="outline-light"
          size="sm"
        >
          Contatos
        </Button>
        <Button className="btnEnviados" variant="outline-light" size="sm">
          Emails enviados
        </Button>
        <Button onClick={handleOnClickShowAgendado} className="btnAgendados" variant="outline-light" size="sm">
          Emails agendados
        </Button>
        {show && (
          <Modal
            show={handleOnClick}
            onHide={handleOnClose}
            backdrop="static"
            keyboard={false}
          >
            {" "}
            <EnviarEmail onClose={handleOnClose} />
          </Modal>
        )}

        {showContato && (
          <Modal
            show={handleOnClickShowContato}
            onHide={handleOnCloseContato}
            backdrop="static"
            keyboard={false}
          >
            {" "}
            <ModalContato onClose={handleOnCloseContato} />
          </Modal>
        )}

{showAgendado && (
          <Modal
            show={handleOnClickShowAgendado}
            onHide={handleOnCloseAgendado}
            backdrop="static"
            keyboard={false}
          >
            {" "}
            <EnviarEmailAgendado onClose={handleOnCloseAgendado} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Menu;
