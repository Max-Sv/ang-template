
import * as userRepo from '../repositories/user.repository';
class UserService {
    private _repository = userRepo;
    public getAll() {
        return this._repository.getAll();
    }
    public get(id) {
        return this._repository.get(id);
    }
    public save(user) {
        return this._repository.save(user);
    }
    public remove(id) {
        return this._repository.remove(id);
    }
    public update(id, user) {
        return this._repository.update(id, user);
    }

}

export = new UserService();