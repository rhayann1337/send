import { Button, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import ModalContato from "../ModalContato";
import EnviarEmailAgendado from "../ModalEmailAgendado";
import EnviarEmail from "../ModalEnviarEmail";
import "./styles.css";
import Autocomplete from '@material-ui/lab/Autocomplete';

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

  const contacts = [
    { title: 'João Silva', year: 1994 },
    { title: 'Pedro Rodrigues', year: 1972 },
    { title: 'Lucas Carvalho', year: 1974 },
    { title: 'Rhayann', year: 2008 },
  ];

  return (
    <div className="container-menu">
      <div className="searchContainer">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={contacts.map((option) => option.title)}
        renderInput={(params: any) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="standard"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
      </div>

      <div className="optionsContainer">
        <Button
          onClick={handleOnClick}
          className="btnNovo"
          variant="contained"
          
        >
          Enviar
        </Button>
        <Button className="btnEntrada" variant="contained" >
          Caixa de entrada
        </Button>
        <Button
          onClick={handleOnClickShowContato}
          className="btnContatos"
          variant="contained" 
        >
          Contatos
        </Button>
        <Button className="btnEnviados" variant="contained" >
          Emails enviados
        </Button>
        <Button
          onClick={handleOnClickShowAgendado}
          className="btnAgendados"
          variant="contained" 
        >
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
