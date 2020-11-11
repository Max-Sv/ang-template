import { Request, Response, NextFunction } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import logger from '../common/logger';
import HttpException from '../models/HttpException';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = error.message || getReasonPhrase(statusCode);
    logger.error(`code: ${statusCode};\n message: ${message};\n error-stack: ${error.stack};\n`)
    response.status(statusCode).send({
        status: 'error',
        statusCode, message
    })
    next();
}
export default errorMiddleware;