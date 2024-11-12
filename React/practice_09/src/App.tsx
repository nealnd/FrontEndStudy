import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [color, setColor] = useState("");
  const [showValue, setShowValue] = useState<Values[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setShowValue(new Values(color).all(10));
    } catch (error) {
      toast.error(`Unable to parse color from string:${color}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <main>
      <section className="container">
        <h4>color generator</h4>
        <form className="color-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            spellCheck="false"
            data-ms-editor="true"
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="btn"
            type="submit"
            style={{ backgroundColor: `${color}` }}
          >
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {showValue.map((item, index) => (
          <SingleColor
            rgb={item.rgbString()}
            precentValue={item.weight}
            hex={item.hexString()}
            index={index}
            key={index}
          ></SingleColor>
        ))}
      </section>
      <ToastContainer></ToastContainer>
    </main>
  );
}

export default App;
