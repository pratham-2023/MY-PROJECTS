import "./App.css";
import AppDescription from "./components/AppDescription";
import AppTitle from "./components/AppTitle";
import Student from "./components/Student";

function App() {
  return (
    <div className="App-Container">
      <AppTitle siteName="RTSoft" />
      <AppDescription masterName="Ratnadip T" />
      <div className="conta">
        <div className="row">
          <div className="col">
            <Student stdID="101" stdName="John Doe" stdCity="California" />
          </div>
          <div className="col">
            <Student stdID="102" stdName="Arti Nathani" stdCity="Balaghat" />
          </div>
          <div className="col">
            <Student stdID="103" stdName="Abhinav Bopche" stdCity="Goregaon" />
          </div>
          <div className="col">
            <Student stdID="104" stdName="Sarang Thawkar" stdCity="Gondia" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
