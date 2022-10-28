import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModalWindow({ showDelete, onShowDelete, id, onDelete }) {
  return (
    <>
      <Modal show={showDelete}>
        <Modal.Header>
          <Modal.Title>Предупреждение об удалении</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Вы действительно хотите удалить заказ с ID:{id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onShowDelete()}>
            Отменить
          </Button>
          <Button variant="danger" onClick={() => onDelete(id)}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DeleteModalWindow;
