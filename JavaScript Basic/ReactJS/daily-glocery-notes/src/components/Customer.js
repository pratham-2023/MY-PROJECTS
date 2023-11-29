const Customer = (props) => {
  return (
    <div className="txt">
      <p>Acc No. : {props.accNo} </p>
      <h1>Name : {props.cusName}</h1>
    </div>
  );
};

export default Customer;
