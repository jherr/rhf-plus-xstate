import { Machine, assign } from "xstate";

const pizzaMachine = Machine(
  {
    id: "pizzaMachine",
    initial: "setType",
    context: {
      bakingCount: 1,
      type: "Pepperoni",
      toppings: "Lots of toppings",
      address: "My house",
      status: "deciding",
    },
    states: {
      setType: {
        on: {
          NEXT: "setToppings",
          "type.UPDATE": {
            actions: assign({
              type: (_, event) => event.value,
            }),
          },
        },
      },
      setToppings: {
        on: {
          NEXT: "setAddress",
          PREV: "setType",
          "toppings.UPDATE": {
            actions: assign({
              toppings: (_, event) => event.value,
            }),
          },
        },
      },
      setAddress: {
        on: {
          NEXT: "startBaking",
          PREV: "setToppings",
          "address.UPDATE": {
            actions: assign({
              address: (_, event) => event.value,
            }),
          },
        },
      },
      startBaking: {
        invoke: {
          src: () => (cb) => {
            window.setInterval(() => {
              cb("TICK");
            }, 1000);
          },
        },
        on: {
          TICK: {
            actions: assign({
              bakingCount: (context) => context.bakingCount + 1,
            }),
          },
        },
        entry: ["setBaking"],
      },
    },
  },
  {
    actions: {
      setBaking: (context) => {
        context.status = "baking...";
      },
    },
  }
);

export default pizzaMachine;
