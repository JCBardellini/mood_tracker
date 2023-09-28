import React, { useContext } from "react";
import { mainContext } from "../../context/MainProvider";

const Emojis = () => {
  const { currentMood, setCurrentMood } = useContext(mainContext);

  //   setCurrentMood("neutral");
  return (
    <div>
      <h1>{currentMood === "happy" ? "🙃" : ""}</h1>
      <h1>{currentMood === "neutral" ? "🫠" : ""} </h1>
      <h1>{currentMood === "sad" ? "😭" : ""}</h1>
    </div>
  );
};

export default Emojis;
