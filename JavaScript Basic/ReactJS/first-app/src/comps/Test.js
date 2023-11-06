import './Test.css';

function Test(){

    let stdName = 'Tushar Barewar';

    return(
        <div className="header">
            <h1 className="text-title">
                My Name is {stdName}.
            </h1>
        </div>
    );
}

export default Test;