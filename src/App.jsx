import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // for password
  const [password, setpassword] = useState("");
  // for length
  const [length, setlength] = useState(8);
  // for Number clicked
  const [numberClicked, setnumberClicked] = useState(false);
  // for character clicked
  const [Char_Clicked, setChar_Clicked] = useState(false);

  // useRef hook
  const passwordReference = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberClicked) {
      string = string + "0123456789";
    }
    if (Char_Clicked) {
      string = string + "!@#$%^&*{()}|?";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass = pass+string.charAt(char);
    }

    setpassword(pass);

  }, [length, numberClicked, Char_Clicked, setpassword]);

  const CopyPasswordToClipboard = ()=>{
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator();
  }, [length, numberClicked, Char_Clicked, passwordGenerator]);

  return (
    <div className="bg-black h-screen">
      <h1 className=" text-white max-w-md mx-auto text-center py-5 text-2xl">
        Password Generator
      </h1>

      <div className="bg-gray-600 w-full text-white max-w-md mx-auto rounded-3xl p-5">
        <div className="flex items-center gap-3 bg-gray-100 rounded-2xl p-2">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="flex-1 bg-transparent outline-none px-4 py-3 text-black"
            ref={passwordReference}
          />
          <button onClick={CopyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-500 transition-colors px-5 py-3 rounded-xl border border-blue-500 font-medium cursor-pointer">
        
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
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />

            <label className="text-blue-300 p-2 text-lg">Length: {length}</label>
          </div>

          <div className="mt-4">
            <input
              type="checkbox"
              defaultChecked={numberClicked}
              id="numberInput"
              onChange={() => {
                setnumberClicked((prev) => !prev);
              }}
            />

            <label htmlFor="numberInput" className="text-blue-300 p-2 text-lg">
              Number
            </label>
          </div>
          <div className="mt-4">
            <input
              type="checkbox"
              defaultChecked={Char_Clicked}
              id="charInput"
              onChange={() => {
                setChar_Clicked((prev) => !prev);
              }}
            />

            <label htmlFor="charInput" className="text-blue-300 p-2 text-lg">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
