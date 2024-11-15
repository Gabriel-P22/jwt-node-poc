import { genericMiddleware } from "@type/genericMiddleware";
import { userRepository } from "../../repositories/userRepository";
import { UnauthorizedError } from "../../helpers/apiErrors";

import jwt from "jsonwebtoken";

export const responseInstance: genericMiddleware<ProfileRequest> = async (req, res) => {
    
    const { password: _, ...loggedUser } = req.user;

    return res.json(loggedUser);
}