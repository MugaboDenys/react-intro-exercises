import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex items-center justify-center bg-yellow-500">
      <h1 className="text-3xl font-light ">Hello, world!</h1>
    </div>
  );
}

export default App;
