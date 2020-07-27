//модуль для путей в ноде
const path = require('path');
console.log(path.basename(__filename));// метод забирает имя из пути
console.log(path.dirname(__filename)); //путь до файла
console.log(path.extname(__filename)); // расширение файла
 // работаем с путями как с объектами
console.log(path.parse(__filename)); //этим объктом мы можем пользоваться как угодно
console.log(path.parse(__filename).ext); // вызвали поле ext
console.log(path.parse(__filename).base);


//еще один метод для работы с путями
console.log(path.join(__dirname, 'test', 'second.html')); //генерируем путь для ноды. объединяем несколько строк/ 1 папка где идет разработка 2 папка 3 файл
console.log(path.resolve(__dirname, '/test', '/second.html'));//метод резолв делает корректный путь метод выдает абсолютный путь до файла если есть /

