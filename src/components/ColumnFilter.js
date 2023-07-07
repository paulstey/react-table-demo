/* eslint-disable react/prop-types */
import React from "react";

function ColumnFilter({ column }) {
  const { filterValue, setFilter } = column;

  return (
    <span>
      Search:{" "}
      <input
        value={filterValue || ""}
        onChange={(event) => setFilter(event.target.value)}
      />
    </span>
  );
}

export default ColumnFilter;
