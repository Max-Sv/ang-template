
import * as loginRepo from '../repositories/login.repository';
import * as jwt from 'jsonwebtoken';

class UserService {
    private _repository = loginRepo;
    public async getToken(user) {
        const data = await this._repository.valigate(user);
        const expiration = '1h';
        const signature = JWT_SECRET_KEY;
        const token = await jwt.sign(data, signature, {
            expiresIn: expiration
        });
        return token;
    }
    public createCookie(tokenData: TokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
    }
    public createToken(user: User): TokenData {
        const expiresIn = 60 * 60; // an hour
        const secret = process.env.JWT_SECRET;
        const dataStoredInToken: DataStoredInToken = {
            _id: user._id,
        };
        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
    }

}

export = new UserService();