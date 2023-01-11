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
  const [date, setDate] = useState<string>("");
  const favWord: string = "Gobble";

  // if functions do something but return nothing === type void

  const dateStamp = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateStamp = new Date();
    const year = dateStamp.getFullYear();
    const date = dateStamp.getDate();
    const monthIndex = dateStamp.getMonth();
    const monthName = months[monthIndex];
    let hours = dateStamp.getHours();
    const minutes = dateStamp.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesWLeadingZero = minutes < 10 ? "0" + minutes : minutes;
    const timeStamp = `${monthName} ${date}, ${year} at ${hours}:${minutesWLeadingZero}${ampm}`;
    setDate(timeStamp);
  };

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
      <div>
        <button onClick={() => dateStamp()}>Click Me</button>
        <p>{date}</p>
      </div>
    </div>
  );
};
export default FirstCounter;
