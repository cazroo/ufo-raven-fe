import React, { useState } from "react"
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./css/modal.css"
import { default as Login } from "./login"; 
import Register from "./register";


export const LoginModal = (props) => {
    const [modalRoute, setModalRoute] = useState(false);
    const handleClick = () => {
        const tempRoute = modalRoute
        setModalRoute(!tempRoute)
    }

    return (
        <div>

            <Modal
                open={props.open}
                onClose={() => props.setOpen(false)}
                center
                classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                }}
            >
                {modalRoute ?
                    <Register/>:
                    <Login/> }
                <button id="switch" onClick={() => handleClick()}>{modalRoute ? "Or login" : "Or Register"}</button>
            </Modal>

        </div>
)}