import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/view" element={<Show />} />
      </Routes>
    </div>
  );
}

export default App;
