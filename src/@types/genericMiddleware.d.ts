import { Request, Response, NextFunction } from "express";

export type genericMiddleware<T> = (
    req: Request<object, object, T>,
    res: Response,
    next: NextFunction
) => void | Promise
