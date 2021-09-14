import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useCallback, useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import { useHistory } from "react-router-dom";
import CaixaDeEntrada from "../../components/CaixaDeEntrada";
import Header from "../../components/Header";
import ModalContato from "../../components/ModalContato";
import EnviarEmailAgendado from "../../components/ModalEmailAgendado";
import EnviarEmail from "../../components/ModalEnviarEmail";
import "./styles.css";
import PeopleIcon from "@material-ui/icons/People";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SendIcon from "@material-ui/icons/Send";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import Dashboard from "../../components/Dashboard";

const Home: React.FC = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [showContato, setShowContato] = useState(false);
  const [showAgendado, setShowAgendado] = useState(false);
  const [showRecebidos, setShowRecebidos] = useState(false);
  const [showEnviados, setShowEnviados] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleOnClickOpenDashboard = useCallback((): void => {
    setShowDashboard(!showDashboard);
  }, [showDashboard]);

  const handleOnClickShowRecebidos = useCallback((): void => {
    setShowRecebidos(!showRecebidos);
  }, [showRecebidos]);

  const handleOnClickShowEnviados = useCallback(() => {
    setShowEnviados(true);
  }, []);

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

  const handleOnClickUser = useCallback((): void => {
    history.push("/cadastro");
  }, [history]);

  const handleOnClickAdmin = useCallback((): void => {
    history.push("/cadastro-adm");
  }, [history]);

  const handleOnClickEmployee = useCallback((): void => {
    history.push("/cadastro-colaborador");
  }, [history]);

  const contacts = [
    { title: "João Silva", year: 1994 },
    { title: "Pedro Rodrigues", year: 1972 },
    { title: "Lucas Carvalho", year: 1974 },
    { title: "Rhayann", year: 2008 },
  ];

  return (
    <>
      <Header />
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
                label="Pesquisar"
                margin="normal"
                variant="standard"
                InputProps={{ ...params.InputProps, type: "search" }}
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
            <SendIcon
              style={{
                marginLeft: "8px",
                marginRight: "8px",
              }}
            />{" "}
            Enviar
          </Button>
          <Button
            className="btnEntrada"
            variant="contained"
            onClick={handleOnClickShowRecebidos}
          >
            <MailOutlineIcon
              style={{
                marginLeft: "8px",
                marginRight: "8px",
              }}
            />{" "}
            Caixa de entrada
          </Button>
          <Button
            onClick={handleOnClickShowContato}
            className="btnContatos"
            variant="contained"
          >
            {" "}
            <PeopleIcon
              style={{
                marginLeft: "8px",
                marginRight: "8px",
              }}
            />{" "}
            Contatos
          </Button>
          <Button
            className="btnEnviados"
            variant="contained"
            onClick={handleOnClickShowRecebidos}
          >
            <MailOutlineIcon
              style={{
                marginLeft: "8px",
                marginRight: "8px",
              }}
            />{" "}
            Emails enviados
          </Button>
          <Button
            onClick={handleOnClickShowAgendado}
            className="btnAgendados"
            variant="contained"
          >
            <SendIcon
              style={{
                marginLeft: "8px",
                marginRight: "8px",
              }}
            />{" "}
            Emails agendados
          </Button>

          <Button
            onClick={handleOnClickOpenDashboard}
            className="btnDashboard"
            variant="contained"
          >
            <ShowChartIcon
              style={{
                marginLeft: "8px",
                marginRight: "8px",
              }}
            />{" "}
            Dashboard
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
      {/* // FIM DO MENU */}
      {showRecebidos && (
        <div className="containerCaixaDeEntrada">
          <CaixaDeEntrada />{" "}
        </div>
      )}
      {!showRecebidos && (
        <div className="container">
          <Button
            className="btn"
            onClick={handleOnClickUser}
            variant="contained"
            color="primary"
          >
            Cadastro de usuario
          </Button>
          <Button
            className="btn"
            onClick={handleOnClickEmployee}
            variant="contained"
            color="primary"
          >
            Cadastro de colaborador
          </Button>
          <Button
            className="btn"
            onClick={handleOnClickAdmin}
            variant="contained"
            color="primary"
          >
            Cadastro de administrador
          </Button>

          {showDashboard && (
            <div className="containerDashboard">
              <h3>Gráficos de emails enviados</h3>
              <Dashboard />{" "}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
