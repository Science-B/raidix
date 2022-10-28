import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModalWindow({ showAdd, onShowAdd, onAdd }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [available, setAvailable] = useState("");
  const [customer, setCustomer] = useState("");
  return (
    <>
      <Modal show={showAdd}>
        <Modal.Header>
          <Modal.Title>Добавить заказ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Наименование товара</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Наименование"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Вес товара</Form.Label>
              <Form.Control
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Вес"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Дата заказа</Form.Label>
              <Form.Control
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="дд.мм.гггг"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Наличие на складе</Form.Label>
              <Form.Control
                type="text"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
                placeholder="Да/Нет"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Заказчик</Form.Label>
              <Form.Control
                required
                type="text"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                placeholder="Заказчик"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onShowAdd()}>
            Отменить
          </Button>
          <Button
            variant="primary"
            onClick={() => onAdd(name, weight, date, available, customer)}
            disabled={
              name !== "" &&
              weight !== "" &&
              date !== "" &&
              date.split("").length === 10 &&
              available !== "" &&
              (available === "Да" || available === "Нет") &&
              customer !== ""
                ? false
                : true
            }
          >
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddModalWindow;
