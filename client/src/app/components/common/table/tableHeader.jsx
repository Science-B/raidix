import React from "react";
const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.sort === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ sort: item, order: "asc" });
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].sort
                ? () => handleSort(columns[column].sort)
                : undefined
            }
            {...{ role: columns[column].sort && "button" }}
            scope="col"
          >
            {columns[column].name}{" "}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
