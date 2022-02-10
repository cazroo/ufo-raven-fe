import React, { useState, useEffect } from "react";
import PaginationTable from "./TableComponents/PaginationTable";
import "../App.css";
import "../components/css/report.css";

function Report({ user }) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [cells, setCells] = useState([]);

  const handleDate = (e) => setDate(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      date: date,
      name: location,
      description: description,
      userId: user.id,
    });

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/location`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
    getData();
  };

  const getData = async () => {
    const reportRes = await fetch(
      `${process.env.REACT_APP_BASE_URL}/user/${user.id}`,
      {
        mode: "cors",
        method: "GET",
      }
    );

    const data = await reportRes.json();
    setCells(data[0].reports);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date", // accessor is the "key" in the data
      },
      {
        Header: "Location",
        accessor: "location.name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Button",
        id: "delete",
        accessor: (str) => "delete",

        Cell: (tableProps) => (
          <span
            style={{
              cursor: "pointer",
              color: "rgb(139, 45, 45)",
              textDecoration: "underline",
            }}
            onClick={() => {
              const dataCopy = [...cells];
              dataCopy.splice(tableProps.row.index, 1);
              setCells(dataCopy);
              let difference = cells.filter((x) => !dataCopy.includes(x));
              const Deleteid = async () => {
                const reportDel = await fetch(
                  `${process.env.REACT_APP_BASE_URL}/report/${difference[0].id}`,
                  {
                    mode: "cors",
                    method: "DELETE",
                  }
                );
                console.log(reportDel);
              };
              Deleteid();
            }}
          >
            Delete
          </span>
        ),
      },
    ],
    [cells]
  );

  const data = React.useMemo(() => cells, [cells]);

  useEffect(() => {
    getData(user);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
 

  return (
    // <>{!user || user ? "" :
    <div className="wrapper">  
      <div className="pageTitle report_table">
        <h1 className="report_title">Create your own report</h1>
        <form onSubmit={submitForm} className="report_form">
          <label htmlFor="date" className="form report_text">
            Date:{" "}
          </label>
          <input
            type="datetime-local"
            name="date"
            value={date}
            onChange={handleDate}
            required={true}
          ></input>

          <label htmlFor="location" className="form report_text">
            Location:{" "}
          </label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={handleLocation}
            required={true}
            placeholder="Enter a location"
          ></input>
          <label htmlFor="description" className="form report_text">
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
            required={true}
            placeholder="Enter a description"
          ></input>
          <input
            style={{ marginBottom: "4rem" }}
            type="submit"
            value="Add report"
            className="submitbtn report_button"
          ></input>
        </form>
        <table className="tablebox report_report">
          <tbody>
            <td>
              <div className="report_table_body">
                {cells && <PaginationTable columns={columns} data={data} />}
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
    // }</>
  );
}

export default Report;
