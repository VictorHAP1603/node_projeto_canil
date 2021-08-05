import { Request, Response } from "express";

import Pet from "../model/Pet";

import { createMenuObject } from "../helpers/createMenuObject";

export default {
  search: (req: Request, res: Response) => {
    const { q } = req.query;

    const pets = Pet.getByName(String(q));

    return res.render("pages/page", {
      menu: createMenuObject(""),
      pets,
      q,
    });
  },
};
