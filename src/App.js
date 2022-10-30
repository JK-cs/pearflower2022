import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Header from "./components/views/Header/Header";
import GamePage from "./components/views/GamePage/GamePage";
import GameOverPage from "./components/views/GamePage/GameOverPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<GamePage />}></Route>
          <Route path="/gameover" element={<GameOverPage />}></Route>
        </Routes>
      </div>
    </Router >
  );
}

export default App;