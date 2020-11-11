import { Router } from 'express';
import UserRouter from '../resources/users/user.router';
import CompanyRouter from '../resources/companies/company.router';

class MasterRouter {
    private _router = Router();
    private _subrouterUser = UserRouter;
    private _subrouterCompany = CompanyRouter;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }


    private _configure() {
        this._router.use('/user', this._subrouterUser);
        this._router.use('/company', this._subrouterCompany);
    }
}

export = new MasterRouter().router;