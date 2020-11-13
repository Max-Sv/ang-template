
import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import handleErrorAsync from '../middleware/handleErrorAsync';
import UserService from '../services/user.service';

class UserRouter {
    private _router = Router();
    private _service = UserService;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.get('/', handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
            const result = await this._service.getAll();
            res.status(StatusCodes.OK).json(result);
        }));
        this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = await this._service.get(req.params.id);
                res.status(StatusCodes.OK).json(result);
            } catch (error) {
                next(error);
            }
        });
        this._router.post('/', handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
            const user = await this._service.save(req.body);
            console.log('user:', user)
            res.status(StatusCodes.OK).send(user);
        }))
        this._router.put('/:id', handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
            const user = await this._service.update(req.params.id, req.body);
            console.log('user:', user)
            res.status(StatusCodes.OK).send(user);
        }))
        this._router.delete('/:id', handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
            const user = await this._service.remove(req.params.id);
            console.log('user:', user)
            res.status(StatusCodes.OK).send(user);
        }))
    }
}

export = new UserRouter().router;