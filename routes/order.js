const router = require("express").Router();
const orderController = require("../controllers/OrderController");

router.get("/:id", orderController.getUserOrders);
router.post("/create", orderController.createOrder);

module.exports = router;
