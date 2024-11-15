import { genericMiddleware } from "@type/genericMiddleware";
import { userRepository } from "../../repositories/userRepository";
import { BadRequestError } from "../../helpers/apiErrors";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const responseInstance: genericMiddleware<loginRequest> = async (req, res) => {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
        throw new BadRequestError('E-mail or Password invalid');
    }

    const verifyPassword: boolean = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
        throw new BadRequestError('E-mail or Password invalid');
    }

    const jwtPass = process.env.JWT_PASS as string;

    const token = jwt.sign(
        { id: user.id },
        jwtPass,
        { expiresIn: '5m' }
    );

    const { password: _, ...userLogin } = user;

    return res.json({
        user: userLogin,
        token
    });
} 