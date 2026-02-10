import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

//static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const images = [
    "img1.jpg",
    "img2.jpg",
  ];
  res.render("gallery", { images });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});