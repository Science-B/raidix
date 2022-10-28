import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = ({ products, columns, onSort, selectedSort }) => {
  return (
    <table className="table">
      <>
        <TableHeader {...{ onSort, selectedSort, columns }} />
        <TableBody {...{ columns, products }} />
      </>
    </table>
  );
};
export default Table;
