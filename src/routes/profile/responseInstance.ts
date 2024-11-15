import { genericMiddleware } from "@type/genericMiddleware";

export const responseInstance: genericMiddleware<void> = async (req, res) => {
    const user = req.user;

    return res.json(user);
}