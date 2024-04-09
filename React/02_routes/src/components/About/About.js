import React from "react";
import myClasses from "./About.module.css";

function About() {
  return (
    <>
      <div className={myClasses.container}>
        <h2 className={myClasses.title}>About Odessa</h2>
        <p className={myClasses.description}>
          Odessa is a vibrant port city located on the Black Sea coast of
          Ukraine. Known for its rich history, diverse culture, and bustling
          atmosphere, Odessa has been a significant center of trade, commerce,
          and tourism for centuries.
        </p>
        <p className={myClasses.description}>
          The city boasts stunning architecture, including the iconic Potemkin
          Stairs, which lead down to the seafront, and the beautiful Odessa
          Opera and Ballet Theater. Odessa's historic center is filled with
          charming cobblestone streets, lined with cafes, boutiques, and art
          galleries.
        </p>
        <p className={myClasses.description}>
          With its vibrant nightlife, delicious cuisine, and warm hospitality,
          Odessa attracts visitors from around the world. Whether you're
          exploring the city's historical landmarks, relaxing on the beach, or
          enjoying the lively atmosphere of its cafes and bars, Odessa offers
          something for everyone.
        </p>
      </div>
    </>
  );
}

export default About;
