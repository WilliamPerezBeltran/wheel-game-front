import React, { useState } from "react";
import Wheel from "./components/wheel";
import "./App.css";

function App() {
  const [places, setPlaces] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
    "Option 8",
    "Option 9",
    "Option 10",
  ]);
  return (
    <div className="App">
      <h1>Items</h1>
      <Wheel items={places} />
    </div>
  );
}

export default App;
