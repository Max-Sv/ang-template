import App from './app';
import config from './common/config'
import logger from './common/logger';

const app = new App(config.PORT);
app.listen();

process
    .on('unhandledRejection', (reason: Error | any) => {
        logger.error(`[Unhandled Rejection] ${reason.stack}`);
    })
    .on('uncaughtException', (err: Error) => {
        logger.error(`[Unhandled Exception] ${err.stack}`);
    });