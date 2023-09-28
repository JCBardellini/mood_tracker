import { useState } from "react";

import "./App.css";
import Emojis from "./components/Emojis";
import ComplimentButton from "./components/ComplimentButton";

function App() {
  return (
    <div className="container">
      <h1>Mood Tracker</h1>
      <Emojis />
      <ComplimentButton />
    </div>
  );
}

export default App;
