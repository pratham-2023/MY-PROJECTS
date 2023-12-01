import "./App.css";
import { useState } from "react";

function App() {
  // let sName = "RTSoft"; //normal variable
  let demoHook = useState("RTSoft"); //Return Array [ stateVariableInitValue , updater|Setter Function ]
  // console.log(demoHook);

  let sName = demoHook[0]; // initial value use to set State variable.
  let updateSName = demoHook[1]; //update method

  let demo = () => {
    // sName = "Avinash"; // Direct Update/change
    updateSName("Avinash"); //pass new value
    console.log(sName);
  };

  return (
    <div className="App-Container">
      <h1 className="txt">My Name is {sName}.</h1>
      <input
        type="text"
        onClick={(e) => {
          console.log(e.target.value);
        }}
      />
      <button onClick={demo}>Click Me!</button>
    </div>
  );
}

export default App;
