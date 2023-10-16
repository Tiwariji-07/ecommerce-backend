const { response } = require("express");
const Order = require("../models/Order");

module.exports = {
  getUserOrders: async (req, res) => {
    const userId = req.params.id;

    try {
      const userOrders = await Order.find({ userId })
        .populate({
          path: "productId",
          select: "-description -product_location",
        })
        .exec();

      res.status(200).json(userOrders);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  createOrder: async (req, res) => {
    const newOrder = new Order(req.body);
    try {
      await newOrder.save();
      res.status(200).json("Order created successfully");
    } catch (error) {
      res.status(500).json("Failed to create Order" + error.message);
    }
  },
};
