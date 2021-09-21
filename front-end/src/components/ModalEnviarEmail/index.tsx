import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export interface ModalEnviarEmailProps {
  onConfirm?: (ev: unknown) => void;
  onClose?: (ev: unknown) => void;
}

const EnviarEmail: React.FC<ModalEnviarEmailProps> = ({
  onConfirm,
  onClose,
}) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Enviar Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <Form>
            <Form.Group className="modal-email" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@mail.com" />
            </Form.Group>
            <Form.Group className="modal-assunto">
              <Form.Label>Assunto</Form.Label>
              <Form.Control type="assunto" placeholder="Assunto" />
            </Form.Group>
            <Form.Group
              className="modal-descricao"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição</Form.Label>
              <Form.Control className='modal-descricao-txt' as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary">Enviar</Button>
      </Modal.Footer>
    </>
  );
};

export default EnviarEmail;
