// backend table
// https://betterprogramming.pub/how-to-efficiently-display-data-in-tables-with-react-7e133bad5719


import React from "react";
import { useTable } from "react-table";

export default function BasicTable ({ columns, data }) {
    // use useTable hook to send the columns data and build the table
    const {
        getTableProps, // sends the needed props to your table
        getTableBodyProps, // sends the needed props to your table body
        headerGroups, // returns normalized header groups
        rows, // rows for the table based on the data passed
        prepareRow // prepare the row in order to be displayed

    } =useTable({ //using accepts 3 props, we load our dataset through these props
        description, 
        date,
        location
    });
}

return (
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((getHeaderGroupProps) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    
                ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
        </tbody>
    </table>
)