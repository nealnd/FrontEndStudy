import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchTours = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTours(result);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (tours.length > 0) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="title-underline"></div>
          </div>
          <div className="tours">
            <Tours tours={tours} onDelete={handleDelete}></Tours>
          </div>
        </section>
      </main>
    );
  } else
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
}

export default App;
