import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";

export default {
  home: (req: Request, res: Response) => {
    const informations = {
      title: "Todos os Animais",
      subtitle: "Todos os animais disponíveis para adoção",

      background: "allanimals.jpg",
    };

    return res.render("pages/page", {
      ...informations,
      menu: createMenuObject("all"),
    });
  },

  dogs: (req: Request, res: Response) => {
    const informations = {
      title: "Cachorros",
      subtitle: "Todos os cachorros disponíveis para adoção",

      background: "banner_dog.jpg",
    };

    return res.render("pages/page", {
      ...informations,
      menu: createMenuObject("dog"),
    });
  },

  cats: (req: Request, res: Response) => {
    const informations = {
      title: "Gatos",
      subtitle: "Todos os gatos disponíveis para adoção",

      background: "banner_cat.jpg",
    };

    return res.render("pages/page", {
      ...informations,
      menu: createMenuObject("cat"),
    });
  },

  fishes: (req: Request, res: Response) => {
    const informations = {
      title: "Peixes",
      subtitle: "Todos os peixes disponíveis para adoção",

      background: "banner_fish.jpg",
    };

    return res.render("pages/page", {
      ...informations,
      menu: createMenuObject("fish"),
    });
  },
};
