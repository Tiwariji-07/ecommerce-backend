const router = require("express").Router();
const userController = require("../controllers/UserController");

router.delete("/:id", userController.deleteUser);
router.get("/:id", userController.getUser);

module.exports = router;
