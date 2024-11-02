import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setpeople] = useState(data);

  const handleDelete = (id) => {
    setpeople(people.filter((person) => person.id !== id));
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>

        <List people={people} onDelete={handleDelete}></List>

        <button
          type="button"
          className="btn btn-block"
          onClick={() => setpeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
