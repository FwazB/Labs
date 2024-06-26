import express from "express";

// require the cors module
import cors from "cors";
import productsRouter from "./routes/productsRouter";
import userRouter from "./routes/usersRouter";
import cartItemsRouter from "./routes/cartItemsRouter";

// creates an instance of an Express server
const app = express();

// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors());

// allow POST and PUT requests to use JSON bodies
app.use(express.json());

app.use("/", productsRouter);
app.use("/", userRouter);
app.use("/", cartItemsRouter);

// define the port
const port = 3000;

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));