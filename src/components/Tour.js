import React from "react";
import classes from "./tour.module.css";

const Tour = (props) => {
  const { image, info, name, price } = props.tour;

  return (
    <main className={classes.main}>
      <article>
        <img src={image} alt={name} />
        <section>
          <div className={classes.heading}>
            <h3>{name}</h3>
            <h4>${price}</h4>
          </div>
          <p>{info}</p>
        </section>
        <button type="button">Not Interested</button>
      </article>
    </main>
  );
};

export default Tour;
