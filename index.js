const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/ProductRoute");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const favoriteRouter = require("./routes/favorite");
const paymentRouter = require("./routes/payment");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e.message));

// app.get("/", (req, res) => res.send("Hello vivek"));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/products", productRouter);
app.use("/api/", authRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use("/api/favorite", favoriteRouter);
app.use("/api/payment", paymentRouter);

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
