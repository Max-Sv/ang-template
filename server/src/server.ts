import App from './app';
import config from './common/config'
import logger from './common/logger';
import { connect } from './database/database';
// import { createDammyData } from './scripts/createDummyData';

const app = new App(config.PORT);

connect();
app.listen();
// createDammyData()

process
    .on('unhandledRejection', (reason: Error | any) => {
        logger.error(`[Unhandled Rejection] ${reason.stack}`);
    })
    .on('uncaughtException', (err: Error) => {
        logger.error(`[Unhandled Exception] ${err.stack}`);
    });