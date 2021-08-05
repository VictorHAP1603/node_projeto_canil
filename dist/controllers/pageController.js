"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createMenuObject_1 = require("../helpers/createMenuObject");
const Pet_1 = __importDefault(require("../model/Pet"));
exports.default = {
    home: (req, res) => {
        const pets = Pet_1.default.getAll();
        return res.render("pages/page", {
            informations: {
                title: "Todos os Animais",
                subtitle: "Todos os animais disponíveis para adoção",
                background: "allanimals.jpg",
            },
            menu: createMenuObject_1.createMenuObject("all"),
            pets,
        });
    },
    dogs: (req, res) => {
        const pets = Pet_1.default.getByType("dog");
        return res.render("pages/page", {
            informations: {
                title: "Cachorros",
                subtitle: "Todos os cachorros disponíveis para adoção",
                background: "banner_dog.jpg",
            },
            menu: createMenuObject_1.createMenuObject("dog"),
            pets,
        });
    },
    cats: (req, res) => {
        const pets = Pet_1.default.getByType("cat");
        return res.render("pages/page", {
            informations: {
                title: "Gatos",
                subtitle: "Todos os gatos disponíveis para adoção",
                background: "banner_cat.jpg",
            },
            menu: createMenuObject_1.createMenuObject("cat"),
            pets,
        });
    },
    fishes: (req, res) => {
        const pets = Pet_1.default.getByType("fish");
        return res.render("pages/page", {
            informations: {
                title: "Peixes",
                subtitle: "Todos os peixes disponíveis para adoção",
                background: "banner_fish.jpg",
            },
            menu: createMenuObject_1.createMenuObject("fish"),
            pets,
        });
    },
};
