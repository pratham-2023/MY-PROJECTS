import "./App.css";
import AppDescription from "./components/AppDescription";
import AppTitle from "./components/AppTitle";
import Student from "./components/Student";

function App() {
  return (
    <div className="App-Container">
      <AppTitle />
      <AppDescription />
      <table>
        <tr>
          <td>
            <Student />
          </td>
          <td>
            <Student />
          </td>
          <td>
            <Student />
          </td>
          <td>
            <Student />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
