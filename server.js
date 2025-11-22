import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("백엔드 서버를 열었드아");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`테야테야 갈테야 로컬로 갈테야 http://localhost:${PORT}`);
});
