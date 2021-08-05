import { Request, Response } from "express";

export default {
  home: (req: Request, res: Response) => {
    return res.render("pages/home");
  },

  dogs: (req: Request, res: Response) => {
    return res.render("pages/dogs");
  },

  cats: (req: Request, res: Response) => {
    return res.render("pages/cats");
  },

  fishes: (req: Request, res: Response) => {
    return res.render("pages/fishes");
  },
};
