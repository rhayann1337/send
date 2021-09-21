import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "./styles.css";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div className="containerBody">
      <div className="containerLogin">
        <div className="containerStyleLogin">
          <Form className="containerFormLogin">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira seu email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Insira sua senha" />
            </Form.Group>
            <Button variant="contained" color="primary" onClick={handleOnClick}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
