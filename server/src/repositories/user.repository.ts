import { NotFoundError, EntityExistsError } from '../models/HttpException';

const TABLE_NAME = 'Users';
import { UserModel } from '../database/users/users.model';

export async function getAll(): Promise<Array<object>> {
    try {
        let users = await UserModel.find({});
        return users.map(user => user.userToResponse());
    } catch (error) {
        throw error;
    }
}

export async function get(id: string): Promise<object> {
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            throw new NotFoundError(TABLE_NAME, { id });
        }
        return user.userToResponse();
    } catch (error) {
        throw error;
    }
};
export async function save(user): Promise<object> {
    try {
        let newUser = await UserModel.create(user);
        // let id1 = await UserModel.findByAge(user);
        // let re = await id.sameLastName();
        // let test UserModel.sameLastName()
        return newUser.userToResponse();
    } catch (error) {
        if (error.code === 11000) {
            throw new EntityExistsError(`${TABLE_NAME} with this username exists`)
        } else {
            throw error;
        }
    }

}
export async function remove(id: string): Promise<object> {
    try {
        let user = await UserModel.findByIdAndDelete(id);
        return user.userToResponse();
    } catch (error) {
        throw error;
    }
}
export async function update(id: string, user): Promise<object> {
    try {
        let updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
        if (!updatedUser) {
            throw new NotFoundError(TABLE_NAME, { id });
        }
        return updatedUser.userToResponse();
    } catch (error) {
        throw error;
    }
}



