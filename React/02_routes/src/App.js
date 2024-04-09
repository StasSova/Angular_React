import React from "react";

import Navigation from "./components/Navigation/Navigation";
// import Price from "./components/Price";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Book from "./components/Book/Book";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <header>
          <div className="container">
            <Navigation />
          </div>
        </header>
        <main>
          <div className="container">
            <Routes>
              <Route path="/Book" Component={Book} />
              <Route path="/About" Component={About} />
              <Route path="/Contact" Component={Contact} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
