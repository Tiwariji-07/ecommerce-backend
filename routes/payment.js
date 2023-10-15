const express = require("express");
const PaymentController = require("../controllers/PaymentController");
const router = express.Router();

router.post("/", PaymentController.createPaymentIntent);
router.get("/:id", PaymentController.getIntent);

module.exports = router;
