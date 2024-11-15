import { genericMiddleware } from "@type/genericMiddleware";
import { userRepository } from "../../../repositories/userRepository";
import { BadRequestError } from "../../../helpers/apiErrors";

import bcrypt from "bcrypt";

export const responseInstance: genericMiddleware<userRequest> = async (req, res) => {
    const { name, email, password } = req.body;

        const userExists = await userRepository.findOneBy({email});

        if (userExists) {
            throw new BadRequestError("Email is already in use");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = userRepository.create({
            name,
            email,
            password: hashPassword
        });

        await userRepository.save(newUser);

        const { password: _, ...user} = newUser;

        return res.status(201).json({ user });
}