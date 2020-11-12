import { getReasonPhrase, StatusCodes } from 'http-status-codes';

export class AppError extends Error {
    public statusCode: number;
    public message: string
    constructor(message?: string | undefined) {
        super(message);
    }
}
export class NotFoundError extends AppError {
    constructor(entity: string, params: object, message?: string) {
        super(message || `Couldn't find a(an) ${entity} with: ${JSON.stringify(params)}`)
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export class BadRequestError extends AppError {
    constructor(message?: string | undefined) {
        const code = StatusCodes.BAD_REQUEST;
        super(message || getReasonPhrase(code))
        this.statusCode = code;
    }
}
export class EntityExistsError extends AppError {
    constructor(message?: string | undefined) {
        super(message);
        this.statusCode = StatusCodes.EXPECTATION_FAILED;
    }
}

export class AuthorizationError extends AppError {
    constructor(message?: string | undefined) {
        const code = StatusCodes.UNAUTHORIZED;
        super(message || getReasonPhrase(code))
        this.statusCode = code;
    }
}
export class AuthenticationError extends AppError {
    constructor(message?: string | undefined) {
        const code = StatusCodes.FORBIDDEN;
        super(message || getReasonPhrase(code))
        this.statusCode = code;
    }
}

