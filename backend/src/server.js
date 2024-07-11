import express from "express";
import cors from "cors";
import router from "./routes.js";

const PORT = 3333;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
