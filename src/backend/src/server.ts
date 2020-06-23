import express from "express";
import verifyJWT from "./utils/verifyJWT";
import Login from "./controllers/auth/login";
import Compare from "./controllers/compare";

const bodyParser = require("body-parser");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));

server.post("/login", Login);
server.get("/", verifyJWT, Compare);
export default server;
