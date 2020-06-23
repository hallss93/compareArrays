require("dotenv-safe").config();
const jwt = require("jsonwebtoken");

function login(req: any, res: any) {
  if (req.body.user === "admin" && req.body.password === "123") {
    const id = 1;
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300,
    });
    res.json({
      user: "admin",
      email: "admin@admin.com",
      auth: true,
      token: token,
    });
  } else res.status(500).json({ message: "Login inválido!" });
}
export default login;
