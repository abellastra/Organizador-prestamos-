import express from "express";
import cors from "cors";
import userRouter from "./routers/useRouters";


const app = express();
app.use(cors());

app.use(express.json());
app.use('/', userRouter);
const port = 3000;

app.get("/", (req, res) => {
  res.send("servidor funcionando ");

});

app.listen(port, () => {
  console.log(`server is functioning on poth http://localhost:${port}/`);
});
