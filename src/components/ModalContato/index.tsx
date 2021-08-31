import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export interface ModalContatoProps {
  onConfirm?: (ev: unknown) => void;
  onClose?: (ev: unknown) => void;
}

const ModalContato: React.FC<ModalContatoProps> = ({
  onConfirm,
  onClose,
}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Contato</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Form>
            <Form.Group className="modal-email" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="name" placeholder="Ex: João" />
            </Form.Group>
            <Form.Group className="modal-assunto">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@mail.com" />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary">Pesquisar</Button>
      </Modal.Footer>
    </>
  );
};

export default ModalContato;
