import { useState } from "react";
import "./App.css";

function App() {
  const [password, setpassword] = useState("abc589yts");

  const randomPassword = () => {

    const randomStr = Math.random().toString(36).slice(2);
    setpassword(randomStr);
  };

  return (
    <div className="h-screen text-center p-10 text-3xl">
      <h1>Password Generator</h1>

      <div className="bg-blue-400">{password}</div>
      <button onClick={randomPassword} className="border-4 rounded-3xl bg-green-500 p-3 my-2" >Generate</button>
    </div>
  );
}

export default App;
