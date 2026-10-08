import React from "react";
import { BrowserRouter } from "react-router-dom";
import Site from "./Site";
import "./site.css";
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
