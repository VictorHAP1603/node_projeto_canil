import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";

import Pet from "../model/Pet";

export default {
  home: (req: Request, res: Response) => {
    const pets = Pet.getAll();

    return res.render("pages/page", {
      informations: {
        title: "Todos os Animais",
        subtitle: "Todos os animais disponíveis para adoção",

        background: "allanimals.jpg",
      },
      menu: createMenuObject("all"),
      pets,
    });
  },

  dogs: (req: Request, res: Response) => {
    const pets = Pet.getByType("dog");

    return res.render("pages/page", {
      informations: {
        title: "Cachorros",
        subtitle: "Todos os cachorros disponíveis para adoção",

        background: "banner_dog.jpg",
      },
      menu: createMenuObject("dog"),
      pets,
    });
  },

  cats: (req: Request, res: Response) => {
    const pets = Pet.getByType("cat");

    return res.render("pages/page", {
      informations: {
        title: "Gatos",
        subtitle: "Todos os gatos disponíveis para adoção",

        background: "banner_cat.jpg",
      },
      menu: createMenuObject("cat"),
      pets,
    });
  },

  fishes: (req: Request, res: Response) => {
    const pets = Pet.getByType("fish");

    return res.render("pages/page", {
      informations: {
        title: "Peixes",
        subtitle: "Todos os peixes disponíveis para adoção",

        background: "banner_fish.jpg",
      },
      menu: createMenuObject("fish"),
      pets,
    });
  },
};
