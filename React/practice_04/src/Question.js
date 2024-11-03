import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ data }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{data.title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </button>
      </header>
      {showInfo && <p>{data.info}</p>}
    </article>
  );
};

export default Question;
