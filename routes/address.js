const router = require("express").Router();
const AddressController = require("../controllers/AddressController");

router.post("/", AddressController.addAddress);
router.get("/:id", AddressController.getUserAddress);
router.delete("/:id", AddressController.deleteAddress);
router.post("/update", AddressController.updateAddress);
module.exports = router;
