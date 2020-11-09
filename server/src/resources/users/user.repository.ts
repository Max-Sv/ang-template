// const DB = require('../../utils/inMemoryDB');
import db from '../../utils/db'

// const NotFoundError = require('../../common/notFoundError');
const TABLE_NAME = 'Users';
// import User from './user.model';

const getAll = async () => {
    return await db.getAllEntities(TABLE_NAME);
};
const get = async id => {
    const user = await db.getEntity(TABLE_NAME, id);
    if (!user) {
        throw new Error;
    }
    return user;
};


export = { getAll, get };
