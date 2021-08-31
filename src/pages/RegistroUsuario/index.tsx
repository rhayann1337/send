import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "./styles.css";

const RegistroAdministrador: React.FC = () => {
  return (
    <div className="containerRegistroGeral">
      <div className="containerRegistro">
        <Form>
          <div className="containerTitle">
            <Form.Label>Cadastro de usuário</Form.Label>
          </div>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Insira o email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="name" placeholder="Insira o nome" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Sobrenome</Form.Label>
              <Form.Control type="surname" placeholder="Sobrenome" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="cpf" placeholder="Insira o CPF" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Matrícula</Form.Label>
              <Form.Control type="matricula" placeholder="Matrícula" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Cargo</Form.Label>
            <Form.Control placeholder="Ex: Segurança" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Endereço</Form.Label>
            <Form.Control placeholder="Ex: Rua Visconde de Taunay" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Complemento</Form.Label>
            <Form.Control placeholder="Ex: Bloco 3, apartamento 1 " />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Cidade</Form.Label>
              <Form.Control placeholder="Ex: Curitiba" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Select defaultValue="PR">
                <option>PR</option>
                <option>SP</option>
                <option>RJ</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Número</Form.Label>
              <Form.Control placeholder="Ex: 113" />
            </Form.Group>
          </Row>
          <div className="containerButton">
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegistroAdministrador;
