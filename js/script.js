"use srtict";
//объекты

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: { //объект внутри объекта
        border: 'black',
        background: 'red'
    },
    makeTest: function(){//метод объекта
        console.log("Test");
    }
};
options.makeTest();
// delete options.name;

const {border, background} = options.colors;//деструктуризация
console.log(border);//black




//перебор сложный и ненужный
// let counter =0;
// for (let key in options) { //перебор
//     if (typeof (options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


//перебор простой
console.log(Object.keys(options).length);
