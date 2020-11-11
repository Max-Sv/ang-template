import { createLogger, format, transports } from 'winston';
const formatter = format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.splat(),
    format.printf(res => {
        const { timestamp, level, message } = res;
        return `${timestamp} [${level}]: ${message}`;
    })
);
const transportFileError = new transports.File({
    level: 'error',
    filename: `${__dirname}/../logs/error.log`,
    handleExceptions: true,
    maxFiles: 1
});
const transportFileInfo = new transports.File({
    level: 'info',
    filename: `${__dirname}/../logs/info.log`,
    handleExceptions: true,
    maxFiles: 1
});
const transportConsole = new transports.Console({
    level: 'debug',
    handleExceptions: true,
});
const logger = createLogger({
    transports: [transportFileError, transportFileInfo, transportConsole],
    format: formatter,
    exitOnError: false
});


export default logger;