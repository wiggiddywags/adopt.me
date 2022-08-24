import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import Details from "./Details";
//import Pet from "./Pet";


const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <header>
                    <Link to="/">Adopt Me!</Link>
                </header>
                <Routes>
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/" element={<SearchParams />} />
                </Routes> 
            </BrowserRouter>
        </StrictMode>
    );
};

render(<App />, document.getElementById("root"));

// we created a component called "App"
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

// App here is like an object. It's "an" App that createElement makes
//render(React.createElement(App), document.getElementById("root"));

