import React from "react";
import "../css/EventPageTable.css";

import {
  useTable,
  useSortBy,
  useColumnOrder,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { GlobalFilter } from "./GlobalFilter";

export default function PagiationTable({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page, // fetch the current page
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter, // function to set global filter text value
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 3 }, // number of objects displayed
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder
  );

  //   const changeOrder = () => {
  //     setColumnOrder(["date", "location.name", "description"]);
  //   };

  const { globalFilter } = state;

  return (
    <>
      {/* <button onClick={changeOrder}>Change Column Order</button> */}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        <div>
          <div>
            <div>
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="th"
                          scope="col"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps
                          )}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? "▽"
                                : "△"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                className="EventPageButton"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <button
                  className="EventPageButton"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>
                Back{" "}
              </button>
              <button
                className="EventPageButton"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next{" "}
              </button>
              <button
                className="EventPageButton"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function PaginationTable({ columns, data }) {
//   // Use the useTable Hook to send the columns and data to build the table
//   const {
//     getTableProps, // table props from react-table
//     getTableBodyProps, // table body props from react-table
//     headerGroups, // headerGroups, if your table has groupings
//     page, // fetch the current page
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//     prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageSize: 3 }, // number of objects displayed
//     },
//     usePagination
//   );

//   return (
//     <div>
//       <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
//         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//           <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//             <table className="styled-table" {...getTableProps()}>
//               <thead className="bg-gray-50">
//                 {headerGroups.map((headerGroup) => (
//                   <tr {...headerGroup.getHeaderGroupProps()}>
//                     {headerGroup.headers.map((column) => (
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         {...column.getHeaderProps()}
//                       >
//                         {column.render("Header")}
//                       </th>
//                     ))}
//                   </tr>
//                 ))}
//               </thead>
//               <tbody
//                 {...getTableBodyProps()}
//                 className="bg-white divide-y divide-gray-200"
//               >
//                 {page.map((row, i) => {
//                   prepareRow(row);
//                   return (
//                     <tr {...row.getRowProps()}>
//                       {row.cells.map((cell) => {
//                         return (
//                           <>
//                             <td {...cell.getCellProps()}>
//                               {cell.render("Cell")}
//                             </td>
//                           </>
//                         );
//                       })}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//             <button className="pagination_button" onClick={() => previousPage()} disabled={!canPreviousPage}>
//               Previous page{" "}
//             </button>
//             <button className="pagination_button" onClick={() => nextPage()} disabled={!canNextPage}>
//               Next page{" "}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
