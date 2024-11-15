import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../../helpers/apiErrors";

import jwt from "jsonwebtoken";
import { userRepository } from "../../repositories/userRepository";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.header('authorization');

    if(!authorization) {
        throw new UnauthorizedError("Non-authorization");
    }

    const token = authorization.split(" ")[1];

    const jwtPass = process.env.JWT_PASS as string;

    const { id } = jwt.verify(token, jwtPass) as JwtPayload;

    const user = await userRepository.findOneBy({ id });

    if(!user) {
        throw new UnauthorizedError("Non-authorization");
    }

    const { password: _, ...loggedUser } = user;

    req.user = loggedUser;

    next();
}