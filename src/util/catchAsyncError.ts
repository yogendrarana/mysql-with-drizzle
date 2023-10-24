import { Request, Response, NextFunction } from 'express';

type ExpressRouteHandler = (req: Request, res: Response, next: NextFunction) => any;

export const catchAsyncError = (passedFunction: ExpressRouteHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(passedFunction(req, res, next)).catch(next);
    };
};
