import { Request, Response } from "express";

export default {
  search: (req: Request, res: Response) => {
    return res.render("pages/search");
  },
};
