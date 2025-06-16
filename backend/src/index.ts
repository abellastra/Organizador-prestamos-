import express from "express";
import cors from "cors";
import userRouter from "./routers/useRouters";

import cookieParser from'cookie-parser'

const app = express();
const port = 4000;

/**/
app.use(cookieParser())
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

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`server is functioning on poth http://localhost:${port}/`);
});
