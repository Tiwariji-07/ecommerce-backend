const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    userId: { type: "string", required: true },
    name: { type: "string", required: true },
    contact_no: { type: "string", required: true },
    pincode: { type: Number, required: true },
    city: { type: "string", required: true },
    state: { type: "string", required: true },
    area: { type: "string", required: true },
    flat_no: { type: "string", required: true },
    landmark: { type: "string", required: false },
    country: { type: "string", default: "India" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", AddressSchema);
