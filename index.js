// console.log('Hello', __dirname); // полное имя папки где ведется разработка
// console.log('Hello', __filename); //абсолютный путь с папкой и файлом в котором идет разработка
const userObj = require('./user');/*лобальная функция которая получает что то а в данном случае то что мы экспортировали эта функция экспортирует объект который мы возвращаем из файла*/ 
/*поэтом у это все можно занести в переменную */

console.log(userObj);

const obj = require('./user');

console.log(obj.user);
obj.sayHello();

(function(reqire, module,exports, __filename, __dirname) { //самовызывающаяся функция. и любой модуль в node js т есть любой файл в node js и в такие функ нода передает глобальные объекты
    // и вот здесь внутри идет разработка
    const obj = require('./user');

    console.log(obj.user);
    obj.sayHello();
   })();