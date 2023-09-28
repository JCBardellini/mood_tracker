import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

const ComplimentButton = () => {
  const { compliments, setCompliments, setCurrentMood } =
    useContext(mainContext);

  if (compliments <= 5) {
    setCurrentMood("sad");
  } else if (compliments > 5 && compliments <= 10) {
    setCurrentMood("neutral");
  } else if (compliments > 10) {
    setCurrentMood("happy");
  }

  return (
    <div className="buttons">
      <button onClick={(e) => setCompliments(compliments + 1)}>
        Compliment
      </button>
      <button onClick={(e) => setCompliments(compliments - 1)}>Taunt</button>
      <h3>{compliments}</h3>
    </div>
  );
};

export default ComplimentButton;
