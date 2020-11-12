import { NotFoundError, EntityExistsError } from '../models/HttpException';

const TABLE_NAME = 'Users';
import { UserModel } from '../database/users/users.model';

const getAll = async () => UserModel.find({})
const get = async id => {
    const user = await UserModel.findById(id);
    if (!user) {
        throw new NotFoundError(TABLE_NAME, { id });
    }
    return user;
};
const save = async user => {
    try {
        let item = await UserModel.create(user);
        // let id1 = await UserModel.findByAge(user);
        // let re = await id.sameLastName();
        // let test UserModel.sameLastName()
        // console.log('re:', re)
        // console.log('id:', id)
        return item.userToResponse();
    } catch (error) {
        if (error.code === 11000) {
            throw new EntityExistsError(`${TABLE_NAME} with this username exists`)
        } else {
            throw error;
        }
    }
}
const update = async (id, user) =>
    UserModel.findOneAndUpdate({ _id: id }, { $set: user }, { new: true });

export = { getAll, get, save, update };
