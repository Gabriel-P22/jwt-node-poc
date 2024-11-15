import "express-async-errors";
import { NextFunction, Request, Response } from 'express'
import { ApiError } from "../../helpers/apiErrors";

export const errorMiddleware = (
	error: ApiError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const statusCode = error.statusCode ?? 500
	const message = error.statusCode ? error.message : 'Internal Server Error'
	res.status(statusCode).json({ message });
	return next();
}