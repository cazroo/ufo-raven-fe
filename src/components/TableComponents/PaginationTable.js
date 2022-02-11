import React from "react";
import "../css/paginationTable.css";

import {
  useTable,
  useSortBy,
  useColumnOrder,
  usePagination,
} from "react-table";

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
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 3 }, // number of objects displayed
    },
    useSortBy,
    usePagination,
    useColumnOrder
  );


  return (
    <>
      <div>
        <div>
          <div>
            <div>
              <table className="table"{...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="thp"
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
                <tbody className="tbody"{...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td className="td"{...cell.getCellProps()}>
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
                className="EventPageButtonp"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <button
                  className="EventPageButtonp"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>
                Back{" "}
              </button>
              <button
                className="EventPageButtonp"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next{" "}
              </button>
              <button
                className="EventPageButtonp"
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
