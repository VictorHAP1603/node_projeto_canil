"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageController_1 = __importDefault(require("../controllers/pageController"));
const searchController_1 = __importDefault(require("../controllers/searchController"));
const routes = express_1.Router();
routes.get("/", pageController_1.default.home);
routes.get("/dogs", pageController_1.default.dogs);
routes.get("/cats", pageController_1.default.cats);
routes.get("/fishes", pageController_1.default.fishes);
routes.get("/search", searchController_1.default.search);
// Se não achar a página
routes.use((req, res) => res.render("pages/404"));
exports.default = routes;
