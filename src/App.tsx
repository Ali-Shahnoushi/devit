import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-teal-500">
        Hello world!
      </h1>
      <button className="btn">Button</button>
    </>
  );
}

export default App;
