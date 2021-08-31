import { Button } from "@material-ui/core";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../../components/Menu";
import "./styles.css";

const Home: React.FC = () => {
  const history = useHistory();

  const handleOnClickUser = useCallback((): void => {
    history.push("/cadastro");
  }, [history]);

  const handleOnClickAdmin = useCallback((): void => {
    history.push("/cadastro-adm");
  }, [history]);

  const handleOnClickEmployee = useCallback((): void => {
    history.push("/cadastro-colaborador");
  }, [history]);

  return (
    <>
      <Menu />
      <div className="container">
        <Button
          className="btn"
          onClick={handleOnClickUser}
          variant="contained" color="primary"
        >
          Cadastro de usuario
        </Button>
        <Button
          className="btn"
          onClick={handleOnClickEmployee}
          variant="contained" color="primary"
        >
          Cadastro de colaborador
        </Button>
        <Button
          className="btn"
          onClick={handleOnClickAdmin}
          variant="contained" color="primary"
        >
          Cadastro de administrador
        </Button>
      </div>
    </>
  );
};

export default Home;
