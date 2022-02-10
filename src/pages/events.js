import React, { useState, useEffect } from "react";
import "../App.css";
import EventPageTable from "../components/TableComponents/EventPageTable";

import { format } from "date-fns";

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
        <h1 className="locationTitle">EVENTS</h1>
        <div className="tablebox">
          <div className="ufoReportsHeader">
            <div className="table">
              <div>
                <table>
                  <thead></thead>

                  <tbody>
                    <td>
                      <div className="tableDiv">
                        {cells && (
                          <EventPageTable columns={columns} data={data} />
                        )}
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
