import express, { Request, Response} from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes/routes";
import { errorMiddleware } from "./middlewares/errors";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json())

    const handler = (_: Request, res: Response): void => {
        res.json("Works");
    }

    app.get('/', handler);

    app.use(routes);
    app.use(errorMiddleware);
    return app.listen(process.env.APP_PORT);
})
