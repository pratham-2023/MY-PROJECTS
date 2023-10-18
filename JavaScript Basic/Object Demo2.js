let student = {
    'sroll' : 101,
    'sname' : "RTSoft",
    'scity' : "Gondia",
    'getData' : function(){
        console.log("ROLL NUMBER : " + this.sroll);
        console.log("STUDENT NAME : " + this.sname);
        console.log("CITY : " + this.scity);
    }
}

student.getData();