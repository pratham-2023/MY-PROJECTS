import "./AppDescription.css";
function AppDescription(props) {
  return (
    <p className="App-Desc">
      Understanding the React JS concepts by <strong>{props.masterName}</strong>
    </p>
  );
}

export default AppDescription;
