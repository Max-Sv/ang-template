import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export class AppError extends Error {
    statusCode: number;
    message: string
    constructor(message) {
        super(message);
    }
}
export class NotFoundError extends AppError {
    constructor(entity, params, message?) {
        super(message || `Couldn't find a(an) ${entity} with: ${JSON.stringify(params)}`)
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export class BadRequestError extends AppError {
    constructor(message) {
        const code = StatusCodes.BAD_REQUEST;
        super(message || getReasonPhrase(code))
        this.statusCode = code;
    }
}
export class EntityExistsError extends AppError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.EXPECTATION_FAILED;
    }
}

export class AuthorizationError extends AppError {
    constructor(message) {
        const code = StatusCodes.UNAUTHORIZED;
        super(message || getReasonPhrase(code))
        this.statusCode = code;
    }
}
export class AuthenticationError extends AppError {
    constructor(message) {
        const code = StatusCodes.FORBIDDEN;
        super(message || getReasonPhrase(code))
        this.statusCode = code;
    }
}

