import React from "react";
import Table from "../common/table";

const ProductsTable = ({
  products,
  onSort,
  selectedSort,
  onEdit,
  onDelete,
}) => {
  const columns = {
    id: {
      path: "id",
      name: "ID",
      sort: "id",
    },
    name: {
      path: "name",
      name: "Наименования товара",
      sort: "name",
    },
    weight: {
      name: "Вес товара",
    },
    date: {
      path: "date",
      name: "Дата заказа",
      sort: "date",
    },
    available: {
      name: "Наличие на складе",
      boolean: "boolean",
    },
    customer: {
      name: "Заказчик",
    },
    delete: {
      component: (item) => (
        <button
          onClick={() => onDelete(item.id)}
          className="btn btn-danger btn-sm"
        >
          Удалить
        </button>
      ),
    },
    change: {
      component: (item) => (
        <button onClick={() => onEdit(item)} className="btn btn-primary btn-sm">
          Изменить
        </button>
      ),
    },
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      products={products}
    />
  );
};
export default ProductsTable;
