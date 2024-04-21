/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useLocations } from "../../context/LocationContext";
import { useParams } from "react-router-dom";
import css from "./details.module.css";

function Details() {
  const { id } = useParams();
  const { locations } = useLocations();

  const housing = locations.find((el) => el.id === parseInt(id, 10));
  const { photo, name, state, city, availableUnits, wifi, laundry } = housing;
  return (
    <article>
      <img
        src={photo}
        alt={`Exterior photo of ${name}`}
        className={css["listing-photo"]}
      />
      <section className={css["listing-description"]}>
        <h2 className={css["listing-heading"]}>{name}</h2>
        <p className={css["listing-location"]}>
          {city}, {state}
        </p>
      </section>
      <section className={css["listing-features"]}>
        <h2 className={css["section-heading"]}>About this housing location</h2>
        <ul>
          <li>Units available: {availableUnits}</li>
          <li>Does this location have wifi: {wifi}</li>
          <li>Does this location have laundry: {laundry}</li>
        </ul>
      </section>
    </article>
  );
}

export default Details;
