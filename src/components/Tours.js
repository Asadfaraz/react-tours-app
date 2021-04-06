import React from "react";
import Tour from "./Tour";
import classes from "./tours.module.css";

const Tours = ({ tours }) => {
  // destructuring props

  console.log("name:", tours);

  return (
    <div className={classes.maindiv}>
      <h2>Our Tours</h2>
      <hr />
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} />;
      })}
    </div>
  );
};

export default Tours;
