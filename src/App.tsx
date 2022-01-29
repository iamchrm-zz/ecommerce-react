import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Navbar/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App;
