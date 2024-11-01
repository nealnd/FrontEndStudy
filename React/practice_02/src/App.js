import React, { useEffect, useState } from "react";
import Tours from "./Tours";

const url = "/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setTours(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleDelete = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

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
  } else return null;
}

export default App;
