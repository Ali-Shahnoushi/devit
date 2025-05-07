import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
