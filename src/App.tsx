import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const square = count ** 2;

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}, square is {square}
      </button>
    </>
  );
}

export default App;
