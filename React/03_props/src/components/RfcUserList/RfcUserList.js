import React from "react";
import RfcUser from "../RfcUser/RfcUser";

function RfcUserList() {
  const users = [
    {
      name: "Alex",
      age: 35,
      group: "f31",
    },
    {
      name: "Ris",
      age: 22,
      group: "p41",
    },
    {
      name: "Jes",
      age: 45,
      group: "p41",
    },
  ];

  let collection = users.map((el) => <RfcUser user={el} />);

  console.log(collection);

  return (
    <>
      <p>User list</p>
      <div className="users-container">{collection}</div>
    </>
  );
}

export default RfcUserList;
