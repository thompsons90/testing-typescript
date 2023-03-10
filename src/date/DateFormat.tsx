import React, { useState } from "react";

interface DateFormatProps {
  prop1: string;
  prop2: number;
  prop3: boolean;
}

// First Counter is a Functional Component; here are the props we're sending
export const DateFormat: React.FC<DateFormatProps> = ({
  prop1: string,
  prop2: number,
  prop3: boolean,
}) => {
  const [date, setDate] = useState<string>("");

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
    <>
      <div>
        <button onClick={() => dateStamp()}>Click Me</button>
        <p>{date}</p>
      </div>
    </>
  );
};
