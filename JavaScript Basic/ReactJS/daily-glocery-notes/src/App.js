import "./App.css";

function App() {
  return (
    <div className="App-Container">
      <AppTitle />
      <AppDescription />
    </div>
  );
}

function AppTitle() {
  return <h1 className="App-Title">RTSoft Website</h1>;
}

function AppDescription() {
  return <p className="App-Desc">Understanding the React JS concepts</p>;
}
export default App;
