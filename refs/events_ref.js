const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    log(massage) {
        this.emit('massage', `${massage} ${Date.now()}`);

    }
}
const logger = new Logger();

logger.on('massage', data => {
    console.log(data);
}); //прослушка события и превое это то какое событие мы хоти слушать

logger.log('hello shock');