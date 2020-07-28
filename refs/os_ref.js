//модуль помогает понять на какой операционной системе и то что зашито на системе
const os = require('os');
//darwin это ios
console.log(os.platform());

//архитектура
console.log(os.arch());
//информация по процессорам
console.log(os.cpus());

// cвободная память 
console.log(os.freemem());

//всего памяти 
console.log(os.totalmem());
//корневая директория
console.log(os.homedir());
//сколько система в рабочем состоянии
console.log(os.uptime()); //выдает время в милисекундах