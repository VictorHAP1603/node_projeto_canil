"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pet_1 = __importDefault(require("../model/Pet"));
const createMenuObject_1 = require("../helpers/createMenuObject");
exports.default = {
    search: (req, res) => {
        const { q } = req.query;
        if (!q) {
            return res.redirect("/");
        }
        const pets = Pet_1.default.getByName(String(q));
        return res.render("pages/page", {
            menu: createMenuObject_1.createMenuObject(""),
            pets,
            q,
        });
    },
};
