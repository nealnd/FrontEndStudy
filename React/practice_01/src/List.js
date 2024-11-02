const List = ({ people, onDelete }) => {
  return (
    <section>
      {people.map((item) => {
        return (
          <article
            key={item.id}
            className="person"
            onClick={() => onDelete(item.id)}
          >
            <img src={item.image} alt={item.name} className="img"></img>
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
