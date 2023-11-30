import "./App.css";
function App() {
  let demo = (e) => {
    console.log(e);
  };

  return (
    <div className="App-Container">
      <button onClick={demo}>Click Me!</button>
    </div>
  );
}

export default App;
