
import { NextFunction, Request, Response, Router } from 'express';
import UserService from './user.service';

class UserRouter {
    private _router = Router();
    private _service = UserService;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    /**
     * Connect routes to their matching controller endpoints.
     */
    private _configure() {
        this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            console.log('222:', 222)
            try {
                const result = await this._service.getAll();
                console.log('result:', result)
                res.status(200).json(result);

            } catch (error) {
                next(error);
            }
        });
        this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = await this._service.get(req.params.id);
                res.status(200).json(result);
            } catch (error) {
                next(error);
            }
        });
        // this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
        //     try {
        //         const result = await this._service.get(req.params.id);
        //         res.status(200).json(result);
        //     } catch (error) {
        //         next(error);
        //     }
        // });
    }
}

export = new UserRouter().router;