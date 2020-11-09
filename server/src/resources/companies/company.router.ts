
import { NextFunction, Request, Response, Router } from 'express';
import CompanyService from './company.service';

class CompanyRouter {
    private _router = Router();
    private _service = CompanyService;

    get router() {
        return this._router;
    }
    constructor() {
        this._configure();
    }
    private _configure() {
        this._router.get('/', (reg: Request, res: Response, next: NextFunction) => {
            res.status(200).json(this._service.defaultMethod());
        })
    }
}

export = new CompanyRouter().router;