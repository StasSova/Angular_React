import React, { useState } from "react";
import css from "./admin.module.css";
import { useLocations } from "../../context/LocationContext";
import HousingAdmin from "../../components/housingAdmin/housingAdmin";
import EditPanel from "./EditPanel/EditPanel";

function Admin() {
  const { locations, updateLocation } = useLocations();
  const [selectedHousing, setSelectedHousing] = useState(null);

  const handleEdit = (housing) => {
    setSelectedHousing(housing);
  };

  const handleChange = (event) => {
    setSelectedHousing({
      ...selectedHousing,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLocation(selectedHousing);
    setSelectedHousing(null);
  };

  return (
    <>
      <h1>Collections</h1>
      <section className={css.panel}>
        <form className={css.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={selectedHousing ? selectedHousing.name : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={selectedHousing ? selectedHousing.city : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={selectedHousing ? selectedHousing.state : ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Available Units:
            <input
              type="number"
              name="availableUnits"
              value={
                selectedHousing ? selectedHousing.availableUnits : undefined
              }
              onChange={handleChange}
            />
          </label>
          <label>
            Wifi:
            <input
              type="checkbox"
              name="wifi"
              checked={selectedHousing ? selectedHousing.wifi : false}
              onChange={handleChange}
            />
          </label>
          <label>
            Laundry:
            <input
              type="checkbox"
              name="laundry"
              checked={selectedHousing ? selectedHousing.laundry : false}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Update</button>
        </form>
      </section>
      <section className={css.result}>
        {locations.map((el) => (
          <HousingAdmin key={el.id} housing={el} onEdit={handleEdit} />
        ))}
      </section>
    </>
  );
}
export default Admin;
