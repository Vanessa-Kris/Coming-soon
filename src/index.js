import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home.js";
import CountDown from "./CountDown";
import Content from "./Content";

import Subscribe from "./Subscribe";

export default function App() {
  return (
    <>
      <Home />
      <CountDown />
      <Content />

      <Subscribe />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
