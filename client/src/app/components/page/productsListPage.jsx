import React, { useState } from "react";
import ProductsTable from "../ui/productsTable";
import _ from "lodash";

const ProductsListPage = ({ products, onDelete, onEdit }) => {
  const [sortBy, setSortBy] = useState({ sort: "name", order: "asc" });
  const sortedProducts = _.orderBy(products, [sortBy.sort], [sortBy.order]);
  const handleSort = (item) => {
    setSortBy(item);
  };
  return (
    <div className="d-flex">
      {products && (
        <ProductsTable
          products={sortedProducts}
          onSort={handleSort}
          selectedSort={sortBy}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default ProductsListPage;
