
function Student(props){
    
    return (
        <div className="card shadow">
            <div className="card-header bg-info">
                <img className="card-img-top" src={props.sPic} style={{height:'100px'}}  alt="Student 1" />
                <h4 className="text-center text-light mt-2">
                    {props.sName}
                </h4>
            </div>
            <div className="card-body text-center">
                <p className="card-text">
                    ID : <span className="text-info fw-bold"> {props.sRoll} </span>
                </p>

                <p className="card-text">
                    Course : <span className="text-info fw-bold"> {props.sCourse} </span>
                </p>

                <p className="card-text">
                    Fees : <span className="text-info fw-bold"> {props.sFees} /- </span>
                </p>

                <p className="card-text">
                    City : <span className="text-info fw-bold"> {props.sCity} </span>
                </p>

                <p className="card-text">
                    Contact No : <span className="text-info fw-bold"> {props.sMob} </span>
                </p>

                <div className="card-footer text-center bg-info-subtle">
                    <button className="btn btn-outline-info btn-sm">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Student;