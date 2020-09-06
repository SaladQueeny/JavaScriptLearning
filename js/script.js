"use srtict";

function showfirstMessage(text){//создаётся сразу
    console.log(text);
    
}

showfirstMessage("hi");

const logger = function() {//создаётся по ходу кода
    console.log("hello");
};

logger();

const calc = (a,b)=>{ return a+b};//Стрелочная функция