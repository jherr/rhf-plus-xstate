import React from "react";
import { useMachine } from "@xstate/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import pizzaMachine from "./machine";

import TypeForm from "./components/TypeForm";
import ToppingsForm from "./components/ToppingsForm";
import AddressForm from "./components/AddressForm";
import CheckedOut from "./components/CheckedOut";

function App() {
  const [current, send] = useMachine(pizzaMachine);
  return (
    <div
      style={{
        padding: "1em",
        width: 1200,
        margin: "auto",
      }}
    >
      {current.matches("setType") ? (
        <TypeForm
          state={current.context}
          onNext={({ type }) => {
            send("type.UPDATE", { value: type });
            send("NEXT");
          }}
        />
      ) : null}
      {current.matches("setToppings") ? (
        <ToppingsForm
          state={current.context}
          onPrevious={() => send("PREV")}
          onNext={({ toppings }) => {
            send("toppings.UPDATE", { value: toppings });
            send({ type: "NEXT", data: { toppings } });
          }}
        />
      ) : null}
      {current.matches("setAddress") ? (
        <AddressForm
          state={current.context}
          onPrevious={() => send("PREV")}
          onNext={({ address }) => send({ type: "NEXT", data: { address } })}
        />
      ) : null}
      {current.matches("startBaking") ? (
        <CheckedOut state={current.context} />
      ) : null}
    </div>
  );
}

export default App;
