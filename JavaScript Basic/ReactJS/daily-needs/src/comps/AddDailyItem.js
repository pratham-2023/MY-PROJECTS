import "./AddDailyItem.css";
const AddDailyItem = () => {
  return (
    <div className="add-item-box">
      <div className="input-box">
        <input type="text" />
      </div>

      <div className="btn-box">
        <button type="button" className="btn">
          ADD ITEM
        </button>
      </div>
    </div>
  );
};

export default AddDailyItem;
