import "./App.css";
import AppDescription from "./components/AppDescription";
import AppTitle from "./components/AppTitle";
import Student from "./components/Student";
import students from "./components/data";
function App() {
  return (
    <div className="App-Container">
      <AppTitle siteName="RTSoft" />
      <AppDescription masterName="Ratnadip T" />
      <div className="conta">
        <div className="row">
          {students.map((student) => {
            return (
              <div className="col" key={student.id}>
                <Student
                  stdID={student.id}
                  stdName={student.name}
                  stdCity={student.city}
                  status={student.sts}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
