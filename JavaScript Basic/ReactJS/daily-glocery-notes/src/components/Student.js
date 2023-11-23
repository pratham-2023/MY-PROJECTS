import "./Student.css";

const Student = () => {
  let stdId = 1022;
  let stdName = "John Doe";
  let stdCity = "California";
  return (
    <div className="container">
      <h1>
        ID : <span className="id">{stdId}</span>
      </h1>
      <h1 className="std-name">{stdName}</h1>
      <h1 className="std-city">{stdCity}</h1>
    </div>
  );
};

export default Student;
