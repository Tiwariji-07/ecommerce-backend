const router = require("express").Router();
const favoriteController = require("../controllers/FavoriteController");

router.post("/add", favoriteController.addToFavorite);
router.delete("/remove/:favoriteItemId", favoriteController.removeFromFavorite);
router.get("/:id", favoriteController.getAllFavorite);
module.exports = router;
