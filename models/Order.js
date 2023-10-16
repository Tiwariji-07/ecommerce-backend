const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: "string", required: true },
    transactionId: { type: "string", required: true },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    delivery_status: { type: "string", default: "pending" },
    payment_status: { type: "string", required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
