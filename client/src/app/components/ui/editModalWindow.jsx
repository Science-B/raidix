import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditModalWindow({ showChange, onShowChange, currentProduct, onEdit }) {
  const [available, setAvailable] = useState(" ");
  const [customer, setCustomer] = useState(" ");
  useEffect(() => {
    setAvailable(currentProduct.available === true ? "Да" : "Нет");
    setCustomer(currentProduct.customer);
  }, [currentProduct]);

  return (
    <>
      <Modal show={showChange}>
        <Modal.Header>
          <Modal.Title>Изменение заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Доступно на складе(Да/Нет) </Form.Label>
              <Form.Control
                type="text"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Заказчик</Form.Label>
              <Form.Control
                aria-required
                type="text"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onShowChange()}>
            Отменить
          </Button>
          <Button
            variant="primary"
            disabled={
              (available === "Да" || available === "Нет") && customer !== ""
                ? false
                : true
            }
            onClick={() => onEdit(available, customer)}
          >
            Изменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditModalWindow;
