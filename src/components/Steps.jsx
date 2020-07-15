import React from "react";

const STEPS = ["Type", "Toppings", "Address", "Baking"];

const Steps = ({ current }) => (
  <div
    style={{
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(4, 25%)",
    }}
  >
    {STEPS.map((s, ind) => (
      <div
        key={s}
        style={{
          background: ind < current ? "lightblue" : "white",
          color: ind < current ? "white" : "lightblue",
          borderBottom: "1px solid lightblue",
          fontSize: "20pt",
          textAlign: "center",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        {s}
      </div>
    ))}
  </div>
);

export default Steps;
