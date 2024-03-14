import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Navbarnew from "./components/Navbar/Navbar";
import NavScrollExample from "./components/Navbar/Navbar";

// Header component
const Header = () => (
  <header>
    <h1>Dashboard</h1>
    <input type="text" placeholder="Type to search" />
  </header>
);

function Main() {
  return (
    <main>
      <h2>Welcome to GitHub</h2>
      {/* Add more main elements here */}
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2022 GitHub, Inc.</p>
      {/* Add more footer elements here */}
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
