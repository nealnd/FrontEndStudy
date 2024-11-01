const Tours = ({ tours, onDelete }) => {
  return tours.map((tour) => (
    <article className="single-tour" key={tour.id}>
      <img
        src={tour.image}
        alt="Best of Paris in 7 Days Tour"
        className="img"
      />

      <span className="tour-price">${tour.price}</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {tour.info}
          <button className="info-btn"> read more</button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => onDelete(tour.id)}
        >
          not interested
        </button>
      </div>
    </article>
  ));
};

export default Tours;
