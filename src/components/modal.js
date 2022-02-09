import React, { useState } from "react";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./css/modal.css";
import { default as Login } from "./login";
import Register from "./register";

export const LoginModal = (props) => {
    const [modalRoute, setModalRoute] = useState(false);
    const handleClick = () => {
        const tempRoute = modalRoute
        setModalRoute(!tempRoute);
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
                {props.user ? 
                    console.log("") : null}

                {modalRoute ?
                    <Register/> :
                    <Login 
                    user={props.user} 
                    setUser={props.setUser}
                    setOpen={props.setOpen}
                    />
                }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={() => props.setOpen(false)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        {props.user ? console.log(props.user.username) : null}
        {modalRoute ? (
          <Register />
        ) : (
          <Login
            user={props.user}
            setUser={props.setUser}
            setOpen={props.setOpen}
          />
        )}

        <button id="switch" onClick={() => handleClick()}>
          {modalRoute ? "Or Login" : "or Register"}
        </button>
      </Modal>
    </div>
  );
};
