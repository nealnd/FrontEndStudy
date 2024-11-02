import { useState } from "react";

const Tour = ({ tour, onDelete }) => {
  const [readMore, setreadMore] = useState(true);
  return (
    <article className="single-tour" key={tour.id}>
      <img src={tour.image} alt={tour.name} className="img" />

      <span className="tour-price">${tour.price}</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {readMore ? `${tour.info.substring(0, 200)}...` : tour.info}
          <button className="info-btn" onClick={() => setreadMore(!readMore)}>
            {readMore ? "Read More" : "Show less"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => onDelete(tour.id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
