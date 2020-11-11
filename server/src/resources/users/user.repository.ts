import { NotFoundError, EntityExistsError } from '../../models/HttpException';

const TABLE_NAME = 'Users';
import User from './user.model';

const getAll = async () => User.find({})
const get = async id => {
    const user = await User.findById(id);
    if (!user) {
        throw new NotFoundError(TABLE_NAME, { id });
    }
    return user;
};
const save = async user => {
    try {
        return await User.create(user);
    } catch (error) {
        if (error.code === 11000) {
            throw new EntityExistsError(`${TABLE_NAME} with this username exists`)
        } else {
            throw error;
        }
    }
}
const update = async (id, user) =>
    User.findOneAndUpdate({ _id: id }, { $set: user }, { new: true });

export = { getAll, get, save, update };
