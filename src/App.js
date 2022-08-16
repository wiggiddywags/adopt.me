import React from "react";
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Pet from "./Pet";

// we created a component called "App"
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

// App here is like an object. It's "an" App that createElement makes
render(React.createElement(App), document.getElementById("root"));
