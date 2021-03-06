const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/recipe"
router.route("/")
  .get(recipeController.findAll)
  .post(recipeController.create);

// Matches with "/api/recipe/:id"
router
  .route("/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

// search for the name of a recipe or an ingredient
router
  .route("/name/:name")
  .get(recipeController.findByName);

router
  .route("/meal/:meal")
  .get(recipeController.findByMeal);

module.exports = router;
