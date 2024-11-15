import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes/routes";
import { errorMiddleware } from "./middlewares/errors";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json())
    app.use(routes);
    app.use(errorMiddleware);
    return app.listen(process.env.APP_PORT);
})
