"use srtict";
//получение элементов со страницы
const box = document.getElementById("box");

console.log(box);

const btns = document.getElementsByTagName("button");//псевдомассив
const btns1 = document.getElementsByTagName("button")[1];//только вторая кнопка

const circels = document.getElementsByClassName("circles");//html коллекция
console.log(circels);

const hearts = document.querySelectorAll(".heart");//во внуть помещаем css селектор

console.log(hearts);

hearts.forEach(item=>{
    console.log(item);
});

const oneHeart = document.querySelector("div");//только один элемент с остраницы(первый с селектора)
console.log(oneHeart);//получим первую коробку




