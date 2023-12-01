import "./MessageBox.css";
const MessageBox = (props) => {
  if (props.itemList.length === 0) {
    return (
      <div className="msg-box">
        <p className="msg">No items to buy today.</p>
      </div>
    );
  } else {
    return null;
  }
};
export default MessageBox;
