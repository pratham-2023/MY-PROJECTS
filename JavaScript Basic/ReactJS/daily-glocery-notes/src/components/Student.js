import "./Student.css";

const Student = (props) => {
  return (
    <div className="container">
      <strong>
        ID : <span className="id">{props.stdID}</span>
      </strong>
      <strong className="std-name">{props.stdName}</strong>
      <strong className="std-city">{props.stdCity}</strong>
    </div>
  );
};

export default Student;
