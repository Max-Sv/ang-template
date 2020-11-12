import Mongoose from 'mongoose';
import config from '../common/config'
import logger from '../common/logger';
import { UserModel } from './users/users.model';

let database: Mongoose.Connection;

export const connect = () => {
    if (database) {
        return 0;
    }

    Mongoose.connect(config.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });

    database = Mongoose.connection;

    database.once('open', async () => {
        logger.info('Successfully connect to DB');
    });

    database.on('error', () => {
        logger.error('MongoDB connection error:')
    });


    return {
        UserModel,
    };
};
export const disconnect = () => {
    if (!database) {
        return;
    }

    Mongoose.disconnect();
};