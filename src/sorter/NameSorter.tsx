import React from "react";
// import { teams } from "./sortData";
// Goal - sort names into pairs from array

interface Names {
  id: number;
  user: string;
  score: number;
}

const teams: Names[] = [
  {
    id: 0,
    user: "Scott",
    score: 100,
  },
  {
    id: 1,
    user: "Emily",
    score: 90,
  },
  {
    id: 2,
    user: "Evie",
    score: 80,
  },
  {
    id: 3,
    user: "Koda",
    score: 70,
  },
];

const noRepeatRandom = (n: any, arr: any[]) => {
  // TODO: error if n >= arr.length
  let available = [...arr];
  let used: any[] = [];
  return () => {
    const nextIdx = Math.floor(Math.random() * available.length);
    const next = available[nextIdx];
    used.push(next);
    available.splice(nextIdx, 1);
    if (used.length >= n) {
      available.push(used.shift());
    }
    return next;
  };
};
const myRandom = noRepeatRandom(2, [
  "Ali",
  "Annie",
  "Carly",
  "Emily",
  "Evie",
  "Justin",
  "Koda",
  "Mike",
  "Piper",
  "Ross",
  "Scott",
  "Tammy",
]);

// display the results of a bunch of calls to `myRandom()`
console.log(...Array.from({ length: 12 }, myRandom));

export const NameSorter = () => {
  return (
    <>
      <h2>Name Sorter</h2>
      {teams.map((data) => (
        <ul style={{}}>
          <li>
            {data.user} : {data.score}
          </li>
        </ul>
      ))}
      <p>Pause, we will return shortly</p>
    </>
  );
};

console.log(teams);
//  get random objects from the array depending on the amount passed in argument
function getRandomElements(teams: Names[], num: number) {
  const shuffled = [...teams].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
// console.log(getRandomElements(teams, 3));

//  get pair of people and eliminate
// let set = new Set();
// while (teams.length >= 2) {
//   let random1 = Math.floor(Math.random() * teams.length);
//   let person1 = teams.splice(random1, 1)[0];

//   let random2 = Math.floor(Math.random() * teams.length);
//   let person2 = teams.splice(random2, 1)[0];

//   set.add({ from: person1, to: person2 });
//   console.log(`from: ${person1} to: ${person2}`);
// }

// function getRandomItem(arr: any) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   //   teams[Math.floor(Math.random() * teams.length)].user;
//   const item = arr[randomIndex];
//   return item;
// }
// const result = getRandomItem(teams2);
// console.log(result);
