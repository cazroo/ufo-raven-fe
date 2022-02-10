import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="searchBoxTitle">
      Search:{" "}
      <input
        className="SearchBox"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
