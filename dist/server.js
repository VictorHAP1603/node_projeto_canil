"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const app = express_1.default();
dotenv_1.default.config();
// View Engine
app.set("view engine", "mustache");
app.set("views", path_1.default.join(__dirname, "views"));
app.engine("mustache", mustache_express_1.default());
// Public files
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
// Request Body
app.use(express_1.default.urlencoded({ extended: true }));
// Rotas
app.use(index_routes_1.default);
// Port
app.listen(process.env.PORT || 3000);
