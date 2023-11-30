import "./App.css";
import AppName from "./comps/AppName";
import AddDailyItem from "./comps/AddDailyItem";
import ShowDailyItemsList from "./comps/ShowDailyItemsList";
import MessageBox from "./comps/MessageBox";

function App() {
  return (
    <div className="App">
      <AppName />
      <AddDailyItem />
      <ShowDailyItemsList />
      <MessageBox />
    </div>
  );
}

export default App;
