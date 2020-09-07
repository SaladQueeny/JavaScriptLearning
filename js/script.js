/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
"use srtict";

let numberOfFilms ;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(numberOfFilms==''||numberOfFilms==null||isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        let check = true;
        while (check) {
            const oneOfLastFilms1 = prompt("Один из последних просмотренных фильмов?", "");
            const oneOfLastFilmsNumber1 = +prompt("На сколько оцените его?", "");
            if (oneOfLastFilms1.length < 50 && oneOfLastFilms1 != ""&& oneOfLastFilms1 != null) {
                console.log("Прошёл проверку");
                check = false;
                personalMovieDB.movies[oneOfLastFilms1] = oneOfLastFilmsNumber1;
            }
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    }else if(personalMovieDB.count>=10&&personalMovieDB.count<30){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count>30){
        console.log("ВЫ киноман");
    } else{
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(hidden){
    for(let i=0; i<3; i++){
        
        let check1=true;
        while(check1){
            const genre1=prompt(`Ваш любимый жанр под номером ${i+1}`,"");
            if(genre1!=null&&genre1!=""){
                check1=false;
                personalMovieDB.genres[i]=genre1;
            }
        }
    }
}
writeYourGenres(personalMovieDB.genres);
console.log(personalMovieDB);
