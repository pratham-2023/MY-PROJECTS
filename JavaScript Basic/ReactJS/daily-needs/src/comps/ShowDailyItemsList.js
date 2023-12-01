import "./ShowDailyItemsList.css";
const ShowDailyItemsList = (props) => {
  return (
    <div className="list-box">
      {props.itemList.map((item) => {
        return (
          <div className="list-row" key={item}>
            <strong className="list-item">{item}</strong>
          </div>
        );
      })}
    </div>
  );
};
export default ShowDailyItemsList;
