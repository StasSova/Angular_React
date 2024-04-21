import React from "react";
import { useLocations } from "../../context/LocationContext";
import css from "./housingLocations.module.css";
import Housing from "../housing/housing";

function HousingLocations() {
  const { locations } = useLocations();

  return (
    <section className={css.results}>
      {locations.map((el) => (
        <Housing key={el.id} housing={el} />
      ))}
    </section>
  );
}

export default HousingLocations;
