import express, {NextFunction, Request, Response} from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json())

    const handler = (_: Request, res: Response): void => {
        res.json("Works");
    }

    app.get('/', handler);

    return app.listen(process.env.APP_PORT);
})
