import React from "react";
import Input from "./Input.js";
import Access from "./Access.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Access" element={<Access />} />
      </Routes>
    </Router>
  );
}

export default App;
