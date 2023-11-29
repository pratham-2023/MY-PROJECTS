import "./Student.css";

const Student = (props) => {
  // let result = "";
  // 1. Conditional rendering using if else
  // if (props.status) {
  //   result = "PASS";
  // } else {
  //   result = "FAIL";
  // }

  // 2. Conditional rendering using ternary operator (?:).
  // Syntax : condition ? expr if true : expr if false;
  // result = props.status ? "PASS" : "FAIL";

  return (
    <div className="container">
      <strong>
        ID : <span className="id">{props.stdID}</span>
      </strong>
      <strong className="std-name">{props.stdName}</strong>
      <strong className="std-city">{props.stdCity}</strong>
      <strong>
        Result : <span> {props.status ? "PASS" : "FAIL"} </span>
      </strong>
    </div>
  );
};

export default Student;
