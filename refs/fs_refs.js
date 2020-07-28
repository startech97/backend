const fs = require('fs');
const path = require('path');
// file ssystem
//асинхронный метод создаем папку
fs.mkdir(path.join(__dirname, 'notes'), (err) => { //первое это путь второе коллбэк функция а первый параметр в функции ошибка
    if (err) throw new Error(err); //бработка ошибки если папка уже была создана
    console.log('папка была создана');
});

//создаем файлы
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'), //первый параметр путь втрой то что хоти записать в файл
    'hello bitch',
    (err) => { //третий параметр коллбэкфункция с аргументом ошибкой
        if (err) throw err;
        console.log("файл был создан");
    

    fs.appendFile( //для добавления контента в файл
        path.join(__dirname, 'notes', 'mynotes.txt'),
        'from append',
        (err) => { //третий параметр коллбэкфункция с аргументом ошибкой
            if (err) throw err;
            console.log("файл был изменен");
            //cчитывание файлов и чтобы получить всю инфу складываем это в appendFile в коллбэк
            fs.readFile(
                path.join(__dirname, 'notes', 'mynotes.txt'), // первый аргумент путь
                "utf-8",//  или вторым параметром предаем кодировку или  через буффер ниже
                (err, data) => { //второй аргумент коллбэк с ошибкой и датой которую мы получим при чтении
                    if (err) throw  new Error(err);
                    console.log(data); // data возвращает буфер поэтому сразу приводим к строке Buffer.from(data).toString()
                }
            )


        }

    )
}
);


//переименовываем файлы
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'), // второй параметр тоже путь только переименованный
    err => { //третий параметр ошибка
        if(err) throw err;
        console.log('файл переименован');
    }
);



