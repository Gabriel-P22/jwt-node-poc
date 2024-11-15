import { genericMiddleware } from "@type/genericMiddleware";

export const responseInstance: genericMiddleware<void> = async (req, res) => {
    const { password: _, ...loggedUser } = req.user;

    return res.json(loggedUser);
}