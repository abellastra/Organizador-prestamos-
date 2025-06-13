import express from "express";
import cors from "cors";
import userRouter from "./routers/useRouters";


const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("servidor funcionando 🎉🎉🎉🎉🎉🎉");
});

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`server is functioning on poth http://localhost:${port}/`);
});
