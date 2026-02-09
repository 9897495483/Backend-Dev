import express from "express";
import methodOverride from "method-override";

const app = express();

// ================== MIDDLEWARE ==================

// template engine
app.set("view engine", "ejs");

// to parse form data
app.use(express.urlencoded({ extended: true }));

// to support PUT & DELETE via forms
app.use(methodOverride("_method"));

// ================== DATA ==================

let userData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Mike Johnson", age: 35 },
];

// ================== ROUTES ==================

// home page
app.get("/", (req, res) => {
  res.render("index");
});

// get all users
app.get("/user", (req, res) => {
  res.render("user", { userData });
});

// get edit page
// get edit page
app.get("/editpage/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userData.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).render("404");
  }
  res.render("edit", { userData: [user] });
});


// add user
app.post("/api/user", (req, res) => {
  const { name, age } = req.body;

  const newUserData = {
    id: userData.length + 1,
    name,
    age,
  };

  userData.push(newUserData);
  res.redirect("/user");
});

// delete user
app.delete("/api/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIdx = userData.findIndex((u) => u.id === userId);

  if (userIdx === -1) {
    return res.status(404).render("404");
  }

  userData.splice(userIdx, 1);
  res.redirect("/user");
});

// list page (extra example)
app.get("/list", (req, res) => {
  let arr = ["apple", "banana", "grapes", "mango"];
  res.render("list", { arr });
});

app.put("/api/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIdx = userData.findIndex((u) => u.id === userId);
  if (userIdx === -1) {
    return res.status(404).render("404");
  }
  const { name, age } = req.body;
  userData[userIdx].name = name;
  userData[userIdx].age = age;
  res.redirect("/user");
});
// ================== 404 HANDLER ==================
app.use((req, res) => {
  res.status(404).render("404");
});



// ================== SERVER ==================

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

// ================== NOTES ==================
// static server
// csr = client side rendering
// ssr = server side rendering (SEO friendly, faster than CSR)
// template engines: ejs, pug, hbs
// react = csr
// ejs = server side rendered dynamic HTML