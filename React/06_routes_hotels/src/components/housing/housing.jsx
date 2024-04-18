/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import css from "./housing.module.css";
import { Link } from "react-router-dom";

function Housing(props) {
  const { photo, name, state, id } = props.housing;

  return (
    <section className={css["listing"]}>
      <img
        src={photo}
        alt={`Exterior photo of ${name}`}
        className={css["listing-photo"]}
      />
      <h2 className={css["listing-heading"]}>{name}</h2>
      <p className={css["listing-location"]}>
        {name}, {state}
      </p>
      <Link className={css["link"]} to={`/details/${id}`}>
        Learn More
      </Link>
    </section>
  );
}

export default Housing;
