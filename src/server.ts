import express from "express";
import dotenv from "dotenv";
import path from "path";
import mustache from "mustache-express";

import routes from "./routes/index.routes";

const app = express();
dotenv.config();

// View Engine
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustache());

// Public files
app.use(express.static(path.join(__dirname, "../public")));
// Request Body
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use(routes);

// Port
app.listen(process.env.PORT || 3000);
