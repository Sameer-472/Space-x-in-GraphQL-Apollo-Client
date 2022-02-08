import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Launches } from './components/Launches/Launches';
import { Dragons } from './components/Dragons/Dragons';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Mission} from './components/Missions/Mission'
import { Main } from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/dragons" element={<Mission />} />
          <Route path="/dragons" element={<Dragons />} />
        </Routes>
      </BrowserRouter>
      {/* <Main/> */}
      {/* <Launches/> */}
      {/* <Dragons/> */}
    </div>
  );
}

export default App;
