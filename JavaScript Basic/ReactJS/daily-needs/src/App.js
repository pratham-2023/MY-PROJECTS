import "./App.css";
import AppName from "./comps/AppName";
import AddDailyItem from "./comps/AddDailyItem";
import ShowDailyItemsList from "./comps/ShowDailyItemsList";
import MessageBox from "./comps/MessageBox";

function App() {
  // let itemList = [];
  let itemList = [
    "Paneer",
    "Milk",
    "Watermelon",
    "Ghee",
    "Sofa",
    "Grapes",
    "Notebook",
    "Pencil",
  ];
  return (
    <div className="App">
      <AppName />
      <AddDailyItem />
      {itemList.length !== 0 ? <ShowDailyItemsList itemList={itemList} /> : ""}
      <MessageBox itemList={itemList} />
    </div>
  );
}

export default App;
