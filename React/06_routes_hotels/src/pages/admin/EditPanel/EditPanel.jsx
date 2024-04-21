import React, { useState } from "react";
import css from "./editPanel.module.css";

function EditPanel({ housing, onUpdate }) {
  const [editedHousing, setEditedHousing] = useState(housing);

  const handleChange = (event) => {
    setEditedHousing({
      ...editedHousing,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(editedHousing);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={editedHousing.name}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={editedHousing.city}
          onChange={handleChange}
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="state"
          value={editedHousing.state}
          onChange={handleChange}
        />
      </label>
      <label>
        Available Units:
        <input
          type="number"
          name="availableUnits"
          value={editedHousing.availableUnits}
          onChange={handleChange}
        />
      </label>
      <label>
        Wifi:
        <input
          type="checkbox"
          name="wifi"
          checked={editedHousing.wifi}
          onChange={handleChange}
        />
      </label>
      <label>
        Laundry:
        <input
          type="checkbox"
          name="laundry"
          checked={editedHousing.laundry}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

export default EditPanel;
