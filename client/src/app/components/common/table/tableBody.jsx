import React from "react";
import _ from "lodash";

const TableBody = ({ products, columns }) => {
  const renderContent = (item, column) => {
    if (columns[column].boolean) {
      return item.available === true ? "Да" : "Нет";
    }
    if (columns[column].name === "Вес товара") {
      return item.weight;
    }

    if (columns[column].name === "Заказчик") {
      return item.customer;
    }
    if (columns[column].component) {
      const component = columns[column].component;
      if (typeof component === "function") {
        return component(item);
      }
      return component;
    }

    return _.get(item, columns[column].path);
  };
  return (
    <tbody>
      {products.map((item) => (
        <tr key={item.id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
