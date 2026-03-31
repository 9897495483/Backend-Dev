import express from 'express';
import session from 'express-session';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();  
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 1 } // 1 minute
}));

app.get('/login', (req, res) => {
  let userInfo = {
    id: 1,
    name: "Raghav"
  };
  req.session.user = userInfo;
  res.send("User logged in and session created!");
});


app.get('/profile', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to your profile, ${req.session.user.name}`);
  } else {
    res.send("Please log in to view your profile.");
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.send("Error logging out.");
    } else {
      res.clearCookie("connect.sid"); // important fix
      res.send("User logged out and session destroyed!");
    }
  });
});

const userDB = {
  email: "test@gmail.com",
  password: "$2b$10$7QJ9wF6XQz7z6Jp6J0X1uO8g7YJ7hG7nY9X1z3zY6Z7w1xQ1z9abc" // hashed password
};

//verify email
app.post('/verify-email', (req, res) => {
  const { email } = req.body;

  if (email === userDB.email) {
    res.send("Email verified");
  } else {
    res.status(404).send("Email not found");
  }
});


// 2. Check password using bcrypt
app.post('/check-password', async (req, res) => {
  const { email, password } = req.body;

  if (email !== userDB.email) {
    return res.status(404).send("User not found");
  }

  const isMatch = await bcrypt.compare(password, userDB.password);

  if (isMatch) {
    res.send("Password correct");
  } else {
    res.status(401).send("Invalid password");
  }
});


// 3. Create JWT token
app.post('/create-token', (req, res) => {
  const { email } = req.body;

  const token = jwt.sign(
    { email },
    "jwtsecretkey",
    { expiresIn: "1m" }
  );

  res.json({ token });
});


// 4. Send token in cookies
app.post('/send-token', (req, res) => {
  const { token } = req.body;

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 1 // 1 minute
  });

  res.send("Token stored in cookie");
});


// 5. Protected route using JWT
app.get('/dashboard', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Access denied");
  }

  try {
    const decoded = jwt.verify(token, "jwtsecretkey");
    res.send(`Welcome ${decoded.email} to dashboard`);
  } catch (err) {
    res.status(401).send("Invalid token");
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});