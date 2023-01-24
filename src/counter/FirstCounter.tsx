import React, { useState } from "react";

interface FirstCounterProps {
  prop1: string;
  prop2: number;
  prop3: boolean;
}

// First Counter is a Functional Component; here are the props we're sending
const FirstCounter: React.FC<FirstCounterProps> = ({
  prop1: string,
  prop2: number,
  prop3: boolean,
}) => {
  const [count, setCount] = useState<number>(0);
  const favWord: string = "Gobble";

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h2>The Count:</h2>
        <h2>{count}</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "300px",
        }}
      >
        <button onClick={() => setCount(count + 1)} style={{ width: "100px" }}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)} style={{ width: "100px" }}>
          -1
        </button>
        <p>{favWord}</p>
      </div>
    </div>
  );
};
export default FirstCounter;
