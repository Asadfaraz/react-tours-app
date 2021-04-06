import React from "react";
import classes from "./tour.module.css";

const Tour = (props) => {
  //   destructuring props
  const { image, info, name, price } = props.tour;

  // usestate for read more button
  const [readMore, setReadMore] = React.useState(true);

  return (
    <main className={classes.main}>
      <article>
        <img src={image} alt={name} />
        <section>
          <div className={classes.heading}>
            <h3>{name}</h3>
            <h4>${price}</h4>
          </div>
          <p>
            {readMore ? `${info.substring(0, 200)}...` : info}
            <button
              type="button"
              className={classes.rmorebtn}
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "Read More" : "Show Less"}
            </button>
          </p>
        </section>
        <button type="button" className={classes.btn}>
          Not Interested
        </button>
      </article>
    </main>
  );
};

export default Tour;
