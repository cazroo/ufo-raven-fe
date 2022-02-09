import React, { useState, useEffect } from "react";
// // import React from "react";
import PaginationTable from "./PaginationTable";
import "./css/report.css";

function Report({ user }) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [newReports, setNewReports] = useState([]);
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
    });

    let copy = [...newReports];
    copy.push(payload);
    setNewReports(copy);

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/location`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
  };

  const getData = async () => {
    const reportRes = await fetch(`${process.env.REACT_APP_BASE_URL}/report`, {
      mode: "cors",
      method: "GET",
    });

    const data = await reportRes.json();

    setCells(data.data);
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
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);

  const data = React.useMemo(() => cells, [cells]);

  return (
    <>
      {!user ? (
        ""
      ) : (
        <div className="App">
          <div className="report">
            <h1>Report Management</h1>
            <p className="report">{newReports}</p>
            <form onSubmit={submitForm}>
              <label htmlFor="date" className="form">
                Date:{" "}
              </label>
              <input
                type="datetime-local"
                name="date"
                value={date}
                onChange={handleDate}
                required={true}
              ></input>

              <label htmlFor="location" className="form">
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
              <label htmlFor="description" className="form">
                Description:{" "}
              </label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
                required={true}
                placeholder="Please write a description"
              ></input>
              <input
                style={{ marginBottom: "4rem" }}
                type="submit"
                value="Add report"
                className="submitbtn"
              ></input>
            </form>
            <table>
              <tbody>
                <td>
                  <div>
                    {cells && <PaginationTable columns={columns} data={data} />}
                  </div>
                  ;
                </td>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Report;
