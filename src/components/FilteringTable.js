import React from "react";
import "./css/paginationTable.css";

import { useTable, useGlobalFilter, usePagination } from "react-table";
import { GlobalFilter } from "./GlobalFilter";

export default function FilteringTable({ columns, data }) {
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
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter, // function to set global filter text value
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 7 }, // number of objects displayed
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <>
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
                        <th scope="col" {...column.getHeaderProps()}>
                          {column.render("Header")}
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
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous page{" "}
              </button>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                Next page{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
