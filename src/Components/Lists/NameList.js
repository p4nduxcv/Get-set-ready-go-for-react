import React from "react";

export default function NameList() {
  const names = ["pandula", "dananjaya", "mandawala"];
  return (
    <div>
      {names.map((name) => (
        <h3>{name}</h3>
      ))}
    </div>
  );
}
