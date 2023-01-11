import { useState } from "react";
import FirstCounter from "./counter/FirstCounter";

function App() {
  return (
    <div className="App">
      <>
        <h1>TypeScript Practice</h1>
        <FirstCounter prop1={prop1} prop2={prop2} prop3={prop3} />
      </>
    </div>
  );
}

export default App;
