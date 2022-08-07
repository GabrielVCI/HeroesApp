
const express = require("express");

const router = express.Router();

const heroesController = require("../controllers/heroesControllers");

router.get("/", heroesController.GetHeroestList);
router.get("/create-heroes", heroesController.GetCreateHeroes);

router.post("/create-heroes", heroesController.PostCreateHeroes);

router.get("/edit-heroes/:heroesId", heroesController.GetEditHeroes);
router.post("/edit-heroes", heroesController.PostEditHeroes);


router.post("/delete-heroes", heroesController.PostDeleteHeroes);

module.exports = router;