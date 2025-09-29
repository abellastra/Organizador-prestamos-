import express from "express";
import cors from "cors";
import userRouter from "./routers/useRouters";

import cookieParser from "cookie-parser";
const router = express.Router();
import { registerUser } from "./controllers/registerUser";
import { LoginDb } from "./controllers/loginDb";
import { verify } from "crypto";
import { verifyToken } from "./middleware/verifiToken";
const app = express();
const port = 4000;

/**/
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("servidor funcionando 🎉🎉🎉🎉🎉🎉");
});
app.post("/register", registerUser);

app.post("/login", LoginDb);
app.use(verifyToken);

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`server is functioning on poth http://localhost:${port}/`);
});
