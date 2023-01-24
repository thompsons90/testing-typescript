import { useState } from "react";
import FirstCounter from "./counter/FirstCounter";
import { DateFormat } from "./date/DateFormat";
import { NameSorter } from "./sorter/NameSorter";

function App() {
  const [prop1, setProp1] = useState<string>("");
  const [prop2, setProp2] = useState<number>(0);
  const [prop3, setProp3] = useState<boolean>(true);
  return (
    <div className="App">
      <>
        <h1>TypeScript Practice</h1>
        <FirstCounter prop1={prop1} prop2={prop2} prop3={prop3} />
        <div style={{ margin: "50px" }}>
          <DateFormat prop1={prop1} prop2={prop2} prop3={prop3} />
        </div>
        <div>
          <NameSorter />
        </div>
      </>
    </div>
  );
}

export default App;
