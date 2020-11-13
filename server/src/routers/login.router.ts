
// import { NextFunction, Request, Response, Router } from 'express';
// import { StatusCodes } from 'http-status-codes';
// import handleErrorAsync from '../middleware/handleErrorAsync';
// import loginService from '../services/login.service';

// class UserRouter {
//     private _router = Router();
//     private _service = loginService;

//     get router() {
//         return this._router;
//     }

//     constructor() {
//         this._configure();
//     }

//     private _configure() {
//         this._router.post('/', handleErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
//             const { login, password } = req.body;
//             const token = await this._service.getToken({ login, password });
//             res.status(StatusCodes.OK).json(token);
//         }))
//     }
// }

// export = new UserRouter().router;