import React from "react";

import ShowState from "./ShowState";
import Steps from "./Steps";

const CheckedOut = ({ state }) => (
  <div>
    <Steps current={4} />
    <ShowState
      state={state}
      fields={["status", "type", "toppings", "address", "bakingCount"]}
    />
  </div>
);

export default CheckedOut;
