/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import css from "./housingAdmin.module.css";
function HousingAdmin(props) {
  const { photo, name, state, id } = props.housing;
  const handleClick = () => {
    props.onEdit(props.housing);
  };
  return (
    <>
      <section className={css["listing"]}>
        <img
          src={photo}
          alt={`Exterior photo of ${name}`}
          className={css["listing-photo"]}
        />
        <p className={css["listing-heading"]}>{name}</p>

        <p className={css["listing-location"]}>
          {name}, {state}
        </p>

        <div className={css.action}>
          <button onClick={handleClick}>Edit</button>
        </div>
      </section>
    </>
  );
}

export default HousingAdmin;
