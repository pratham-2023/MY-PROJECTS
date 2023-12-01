import "./AddDailyItem.css";
const AddDailyItem = () => {
  let item = "";

  const handleAddItem = () => {
    console.log(item);
  };

  const getInputItemText = (e) => {
    // console.log(e.target.value);
    item = e.target.value;
  };
  return (
    <div className="add-item-box">
      <div className="input-box">
        <input type="text" onKeyDown={getInputItemText} />
      </div>

      <div className="btn-box">
        <button type="button" onClick={handleAddItem} className="btn">
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default AddDailyItem;
