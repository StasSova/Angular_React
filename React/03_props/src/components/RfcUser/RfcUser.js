import React from "react";
import css from "./user.module.css";

function RfcUser(props) {
  return (
    <>
      <div className={css.user}>
        <div className="head">
          <div className="img-cont">
            <img src={props.user.image} alt="userImage" />
          </div>
          <p>{props.user.name}</p>
        </div>
        <p>{props.user.age}</p>
        <p>{props.user.group}</p>
      </div>
    </>
  );
}

export default RfcUser;
