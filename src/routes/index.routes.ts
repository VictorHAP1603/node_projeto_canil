import { Router } from "express";

import PageController from "../controllers/pageController";
import SearchController from "../controllers/searchController";

const routes = Router();

routes.get("/", PageController.home);
routes.get("/dogs", PageController.dogs);
routes.get("/cats", PageController.cats);
routes.get("/fishes", PageController.fishes);

routes.get("/search", SearchController.search);

// Se não achar a página
routes.use((req, res) => res.render("pages/404"));

export default routes;
