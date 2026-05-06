import { useCallback, useState } from "react";

function App() {
  // for password
  const [password, setpassword] = useState("");
  // for length
  const [length, setlength] = useState(8);
  // for Number clicked
  const [numberClicked, setnumberClicked] = useState(false);
  // for character clicked
  const [Char_Clicked, setChar_Clicked] = useState(false);

  // const randomPassword = () => {
  //   const randomStr = Math.random().toString(36).slice(2);
  //   setpassword(randomStr);
  // };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberClicked) {
      string = string + "0123456789";
    }
    if (Char_Clicked) {
      string = string + "!@#$%^&*{()}|?";
    }

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass = string.charAt(char);
    }

    setpassword(pass);
  }, [length, numberClicked, Char_Clicked, setpassword]);

  return (
    <div className="bg-black h-screen">
      <h1 className=" text-white max-w-md mx-auto text-center py-5 text-2xl">
        Password Generator
      </h1>

      <div className="bg-gray-600 w-full text-white max-w-md mx-auto rounded-3xl p-5">
        <div className="flex items-center gap-3 bg-gray-700 rounded-2xl p-2">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="flex-1 bg-transparent outline-none px-4 py-3 text-white"
          />
          <button className="bg-blue-600 hover:bg-blue-500 transition-colors px-5 py-3 rounded-xl border border-blue-500 font-medium cursor-pointer">
            Copy
          </button>
        </div>
        <div>
          <div className="mt-4">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e)=>{setlength(e.target.value)}}
            />

            <label className="text-blue-300 p-2">Length: {length}</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
