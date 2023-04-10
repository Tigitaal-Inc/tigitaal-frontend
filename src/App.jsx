import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Styles
import "./scss/NavBar.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div style={{height: 'calc(100vh - 68px)', background: '#151718'}}></div>
      </BrowserRouter>
    </>
  );
}

export default App;
