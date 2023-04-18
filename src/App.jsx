import React from "react";
import { ReactDOM, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/404";
import SignupPage from "./components/SignupPage";

// Styles
import "./scss/NavBar.scss"
import "./scss/SignUp.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
