import {useState} from "react";


const getAllReportsFetch = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}`, {
            node: "cors",
            method: "GET",
        })
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

const getSingleReportFetch = async (id) => {
    try {
        const url = `${process.env.REACT_APP_BASE_URL}/report/${id}`;
        const res = await fetch (url, {
            method: "GET"
        });
        return await res.json();
    } catch (error) {
        console.log(error)
    }
};

const addReportFetch = async (title, date, location, description) => {
    try {
        const res = await fetch (`${process.env.REACT_APP_BASE_URL}report`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                date, 
                location,
                description
            })
        });
    } catch (error) {
        console.log(error);
    }
}