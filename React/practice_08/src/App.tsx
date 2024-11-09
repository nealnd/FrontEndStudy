import { useState } from "react";
import text from "./data";

function App() {
  const [count, setCount] = useState(1);
  const [Text, setText] = useState<string[]>([]);

  const handleSUbmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setText(text.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form
        className="lorem-form"
        onSubmit={(e) => {
          handleSUbmit(e);
        }}
      >
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => {
            const parsedValue = parseInt(e.target.value, 10);
            setCount(Math.min(Math.max(parsedValue, 1), 8));
          }}
        ></input>
        <button className="btn">generate</button>
      </form>

      <article className="lorem-text">
        {Text.map((item) => {
          return <p>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
