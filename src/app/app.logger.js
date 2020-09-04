const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            eol: '\n',
            filename: 'app.log',
            dirname: 'storage/logs',
            maxFiles: 10,
            maxsize: 10 * 1024 * 1024,
        }),
    ],
});

module.exports = logger;
