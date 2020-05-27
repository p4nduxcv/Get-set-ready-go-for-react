import React from "react";
import Person from "./Person";
import "./../../css/okkomaStyles.css";

export default function NameList(props) {
  console.log(props);
  let className = props.primary ? "primary" : "";
  const persons = [
    {
      id: 1,
      name: "Pandula",
      tag: "react",
    },
    {
      id: 2,
      name: "Dananjaya",
      tag: "Angular",
    },
    {
      id: 3,
      name: "Mandawala",
      tag: "Vue",
    },
  ];

  const names = ["pa", "du", "la", "la"];
  return (
    <div>
      {persons.map((person) => (
        <h3 className={`${className} font-xl`}>
          <Person key={persons.id} person={person} />
        </h3>
      ))}

      {/* {names.map((name, index) => (
        <h3 key="name">
          {/* <Person key={names.id} x={x} /> */}
      {/* {index}
          {name}
        </h3>
      ))} */}
    </div>
  );
}
