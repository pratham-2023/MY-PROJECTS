// import Test from './comps/Test';
import s1 from './images/s1.jpg';
import s2 from './images/s2.jfif';
import s3 from './images/s3.jfif';


import Student from "./comps/Student";

function App() {
  return (
    <div className="container p-3 bg-info-subtle">

        <div className="row mb-4">

            <div className="col">
                <Student sName="RTSoft Solutions" sRoll={101} sCourse="MERN Stack" sFees={25000} sCity="Gondia" sMob="7020795007" sPic={s1} />
            </div>

            <div className="col">
                <Student sName="Abhinav Bopche" sRoll={102} sCourse="JAVA" sFees={32000} sCity="Goregaon" sMob="5642567467" sPic={s2} />
            </div>

            <div className="col">
                <Student sName="Aarti Nathani" sRoll={103} sCourse="Python" sFees={3500} sCity="Balaghat" sMob="4658958456" sPic={s3} />
            </div>

            <div className="col">
                <Student sName="Tushar Barewar" sRoll={104} sCourse="Angular JS" sFees={5000} sCity="Mundipar" sMob="65789425678" sPic={s1} />
            </div>

        </div>

    </div>
  );
}

export default App;


/**
     <Test sName="RTSoft Solutions" shirtColor="orange"/>
      <Test sName="Tushar Barewar"  shirtColor="tomato"/>
      <Test sName="Abhinav Bopche"  shirtColor="yellow"/>
      <Test sName="Dipendra Uikey"  shirtColor="blue"/>
 */