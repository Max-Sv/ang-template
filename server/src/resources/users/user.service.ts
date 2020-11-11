
// import ErrorHandler from '../../models/ErrorHandler';
import userRepo from './user.repository';
class UserService {
    getAll() {
        const users = userRepo.getAll();
        return users;
    }
    get(id) {
        return userRepo.get(id);
    }
    save(user) {
        return userRepo.save(user);
    }
    update(id, user) {
        return userRepo.update(id, user);
    }
    // defaultMethod() {
    //     return {
    //         text: `You've reached the ${this.constructor.name} default method`
    //     };
    // }
}

export = new UserService();