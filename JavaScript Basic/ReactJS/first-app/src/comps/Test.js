import './Test.css';

function Test(props){

    //let stdName = 'Tushar Barewar';

    return(
        <div className={props.shirtColor}>
            <h1 className="text-title">
                My Name is {props.sName}.
            </h1>
        </div>
    );
}

export default Test;