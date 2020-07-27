const user = {
    name: 'elena',
    age: 25
};
const user2 = { //если мы не имортируем этот объект то мы можем увеличивать приложение
    name: 'igor'
};
// module.exports = user; //глобальный объект module c методом exports переносит данные наружу и указываем что перенести

module.exports = { //можно и сразу создавать объект
    user: user,
    sayHello() {
        console.log('sayHello');
    }
};

