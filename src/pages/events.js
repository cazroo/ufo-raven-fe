import React, { useState, useEffect } from "react";
import "../App.css";
// import "./cssPages/events.css"
//button:
import "../components/css/buttons.css";
// import ColumnOrder from "../components/Table components/ColumnOrder";
// import FilteringTable from "../components/TableComponents/FilteringTable";

import { format } from "date-fns";
import ColumnOrder from "../components/TableComponents/ColumnOrder";

export function Events() {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/report`, {
      mode: "cors",
      method: "GET",
    });
    const data = await res.json();

    setCells(data.data);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Description",
        accessor: "description", // accessor is the "key" in the data
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Location",
        accessor: "location.name",
      },
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);

  const data = React.useMemo(() => cells, [cells]);

  return (
    <div className="wrapper">
      <div className="pageTitle">
        <h1>EVENTS</h1>
        <div className="tablebox">
          <div className="ufoReportsHeader">
            <div className="table">
              <div>
                <table>
                  <thead></thead>

                  <tbody>
                    <td>
                      <div>
                        {cells && <ColumnOrder columns={columns} data={data} />}
                      </div>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
