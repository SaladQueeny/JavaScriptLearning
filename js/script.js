/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
"use srtict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let check = true;
            while (check) {
                const oneOfLastFilms1 = prompt("Один из последних просмотренных фильмов?", "");
                const oneOfLastFilmsNumber1 = +prompt("На сколько оцените его?", "");
                if (oneOfLastFilms1.length < 50 && oneOfLastFilms1 != "" && oneOfLastFilms1 != null) {
                    console.log("Прошёл проверку");
                    check = false;
                    personalMovieDB.movies[oneOfLastFilms1] = oneOfLastFilmsNumber1;
                }
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("ВЫ киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!personalMovieDB.privat) {
            console.log("showMydb");
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(hidden) {
        for (let i = 0; i < 3; i++) {
    
            let check1 = true;
            while (check1) {
                const genre1 = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
                if (genre1 != null && genre1 != "") {
                    check1 = false;
                    personalMovieDB.genres[i] = genre1;
                }
            }
            // Альтернативный вариант из урока
            
            // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            // if (genres === '' || genres == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // } 
        }
        personalMovieDB.genres.forEach((item,i)=>{
        console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.private=!personalMovieDB.private;
    }
};
personalMovieDB.writeYourGenres();

console.log(personalMovieDB);