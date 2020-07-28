// выйти в корень приложения cd ..  зайти в папку сd имя папки
// ctrl + c остановить процесс
// localhost:3000
const http = require('http');

//мы сами создаем и настраиваем сервер
const server = http.createServer((req, res) => {  //передаем функию которая будет выполнена когда будут определенные запросы на сервер
 // эта функция называется хендлер принимает два параметра реквест и респонз
 console.log(req.url);
 res.write('<h1>hello from nodejs</h1>');
 res.write('<h2>hello from nodejs</h2>'); 
 res.write('<h3>hello from nodejs</h3>');  //и ответ нужно закрыть
 res.end(
     `<div style="background: red; width: 200px; height: 200px;">
       <h1>Test</h1>
     </div>`
 ); // в энд мы може передавать html

});

//чтобы запусть сервер
server.listen(3000, () => {
 console.log("server is running");
}); //первый парметр порт на котором запускаем  второй параметр коллбэк которая сработает когда сервекр запустится