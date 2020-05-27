import React from "react";
import Person from "./Person";

export default function NameList() {
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
  return (
    <div>
      {persons.map((person) => (
        <h3>
          < Person person={person} />
        </h3>
      ))}
    </div>
  );
}
