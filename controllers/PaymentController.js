const secret = process.env.STRIPE_SEC;
const stripe = require("stripe")(
  "sk_test_51O1UzOSJGdeU3lE0eIE0I3VyfWrvmY52DutETVvLefRX4ailhfzOQQf2ZPy6UPQsB9uBjEdc1kDGUC4RPT9UG8mz006I0MAQD6"
);

module.exports = {
  createPaymentIntent: async (req, res) => {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",

        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({ paymentIntent: paymentIntent.client_secret });
    } catch (e) {
      res.status(400).json({
        error: e.message,
      });
    }
  },
  getIntent: async (req, res) => {
    const intentId = req.params.id;
    try {
      const paymentIntent = await stripe.paymentIntents.retrieve(intentId);
      if (paymentIntent) {
        res.status(200).json({ paymentIntent: paymentIntent });
      } else {
        res.status(400).json("No intent found");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
