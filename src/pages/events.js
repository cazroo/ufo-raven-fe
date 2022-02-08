
import React, { useState, useEffect } from "react";
import "../App.css";
// import "./cssPages/events.css"
//button:
import "../components/css/buttons.css";
// import Navbar from '../components/navBar'
import PaginationTable from "../components/PaginationTable";

export function Events() {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/report`, {
      node: "cors",
      method: "GET",
    });
    const data = await res.json();
    const finalData = await data.data;
    setCells(finalData);
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
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);

  const data = React.useMemo(() => cells, [cells]);

  console.log(cells);
  console.log(data);
  return (
    <div className="wrapper">
      <div className="pageTitle">
        <h1>EVENTS</h1>
        <div className="tablebox">
          <div className="ufoReportsHeader">
            <h2>U.F.O REPORT</h2>
            <div className="table">
              <div>
                <table>
                  <thead></thead>

                  <tbody>
                    <td>
                      <div>
                        {cells && (
                          <PaginationTable columns={columns} data={data} />
                        )}
                      </div>
                      ;
                    </td>
                    {/* {cells.map(cells => (
          <tr key={cells.id}>
            
          
          
          </tr>
        ))} */}
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