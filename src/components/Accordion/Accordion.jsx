import React, { useState } from "react";
import questions from "./data";
import "./accordion.css";
import { MdExpandMore } from "react-icons/md";

const Accordion = () => {
  const [selected, setSelected] = useState([]);

  const ontoggle = (i) => {
    if (selected.includes(i)) {
      setSelected(selected.filter((item) => item != i));
    } else {
      setSelected((prev) => [...prev, i]);
    }
  };
  return (
    <>
      <div className="flex flex-col ">
        <div className="text-center mx-auto font-bold text-4xl mb-2">
          Accordion
        </div>
        <div className="wrapper ">
          <div className="accordion">
            {questions.map((item, i) => (
              <div
                className={`item ${selected.includes(i) ? "selected" : ""}`}
                key={i}
              >
                <div
                  className={`${
                    selected.includes(i) ? "title active-title" : "title"
                  }`}
                >
                  <h2>{item.title}</h2>
                  <span
                    onClick={() => ontoggle(i)}
                    style={{
                      transform: `rotate(${selected.includes(i) ? 180 : 0}deg)`,
                      transition: "transform 0.6s ease-in-out",
                    }}
                  >
                    <MdExpandMore />
                  </span>
                </div>
                <div
                  className={`${
                    selected.includes(i) ? "content show" : "content"
                  }`}
                >
                  {item.info}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
