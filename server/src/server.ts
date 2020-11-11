import App from './app';
import config from './common/config'
import logger from './common/logger';
import mongoose from 'mongoose';

mongoose.connect(config.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
const app = new App(config.PORT);
db.on('error', () => logger.error('MongoDB connection error:')).once(
    'open',
    () => {
        logger.info('Successfully connect to DB');
        app.listen();
    }
);

process
    .on('unhandledRejection', (reason: Error | any) => {
        logger.error(`[Unhandled Rejection] ${reason.stack}`);
    })
    .on('uncaughtException', (err: Error) => {
        logger.error(`[Unhandled Exception] ${err.stack}`);
    });