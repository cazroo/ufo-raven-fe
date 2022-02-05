import { useState } from "react";
import React from "react";

function Report() {
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
  
    const handleDate = (e) => setDate(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);


  const submitForm = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      date: date,
      location: location,
      description: description,
    });

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/report`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
  };

    console.log(date, location, description)

    return (
        <div className="App">
          <div>
            <h1>Report Management</h1>
            <form onSubmit={submitForm}>
              <label htmlFor="date" className="form">
                Date:{" "}
              </label>
              <input
                type="datetime-local"
                name="date"
                value={date}
                onChange={handleDate}
                required= {true}
              ></input>
    
              <label htmlFor="location" className="form">
                Location:{" "}
              </label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleLocation}
                required= {true}
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
                required= {true}
                placeholder="Please write a description"
              ></input>
              <input
              style={{marginBottom:"4rem"}}
                type="submit"
                value="Submit"
                className="submitbtn"
              ></input>
            </form>
          </div>
        </div>
      );
}

export default Report;


// const getAllReportsFetch = async () => {
//     try {
//         const res = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
//             node: "cors",
//             method: "GET",
//         })
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// };

// const getSingleReportFetch = async (id) => {
//     try {
//         const url = `${process.env.REACT_APP_BASE_URL}/report/${id}`;
//         const res = await fetch (url, {
//             method: "GET"
//         });
//         return await res.json();
//     } catch (error) {
//         console.log(error)
//     }
// };

// const addReportFetch = async (title, date, location, description) => {
//     try {
//         const res = await fetch (`${process.env.REACT_APP_BASE_URL}report`, {
//             method: "POST",
//             headers: { 
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title,
//                 date, 
//                 location,
//                 description
//             })
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }