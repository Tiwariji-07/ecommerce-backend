const Address = require("../models/Address");

module.exports = {
  addAddress: async (req, res) => {
    const address = new Address(req.body);
    try {
      await address.save();
      res.status(200).json("Address added successfully");
    } catch (error) {
      res.status(500).json("Failed to add address" + error.message);
    }
  },
  getUserAddress: async (req, res) => {
    const userId = req.params.id;
    try {
      const addresses = await Address.find({ userId: userId });
      res.status(200).json(addresses);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  deleteAddress: async (req, res) => {
    const addressId = req.params.id;
    try {
      const address = await Address.findOneAndRemove({ _id: addressId });
      if (address) {
        res.status(200).json(address);
      } else {
        res.status(401).json(address);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateAddress: async (req, res) => {
    const { addressId, address } = req.body;
    try {
      const updatedAddress = await Address.findOneAndUpdate(
        { _id: addressId },
        address,
        { new: true }
      );
      if (!updatedAddress) {
        return res.status(404).render("Address item not found");
      }

      res.status(200).json(updatedAddress);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
