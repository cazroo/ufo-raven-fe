import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search:{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

// export default function GlobalFilter({ filter, setFilter }) {
//   return (
//     <>
//       <p> Search here: </p>
//       <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
//     </>
//   );
// }
