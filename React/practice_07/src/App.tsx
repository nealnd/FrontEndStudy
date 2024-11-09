import people from "./data";
import Article from "./Article";
import { useEffect, useState } from "react";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function App() {
  const [Index, setIndex] = useState(0);
  const [resetInterval, setResetInterval] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((preIndex) => {
        if (preIndex < people.length - 1) return preIndex + 1;
        else return 0;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [resetInterval, people]);

  const prevSlide = () => {
    setIndex((preIndex) => {
      if (preIndex === 0) return people.length - 1;
      else return preIndex - 1;
    });
    setResetInterval((prev) => !prev);
  };

  const nextSlide = () => {
    setIndex((preIndex) => {
      if (preIndex < people.length - 1) return preIndex + 1;
      else return 0;
    });
    setResetInterval((prev) => !prev);
  };

  return (
    <section className="section">
      {people.map((item, index) => {
        return (
          <Article
            data={item}
            translateParams={index * 100 - Index * 100}
            key={index}
          ></Article>
        );
      })}

      <button className="prev">
        <FiChevronLeft onClick={() => prevSlide()} />
      </button>
      <button className="next">
        <FiChevronRight onClick={() => nextSlide()} />
      </button>
    </section>
  );
}

export default App;
