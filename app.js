import express from "express";
import morgan from "morgan";
import helmet from"helmet";
import cookieParser from"cookie-parser";
import bodyParser from"body-parser";
import { localsMiddeleware } from "./middleWares";
import routes from"./routes";
import userRouter from"./routers/userRouter";
import videoRouter from"./routers/vidoeRouter";
import globalRouter from"./routers/globalRouter";
const app = express();

app.use(helmet());
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(localsMiddeleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

