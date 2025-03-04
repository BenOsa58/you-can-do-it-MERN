import express from "express";
import { getPaymentIntent, getPaymentStatus } from "../controllers/paymentsController.js";
// const paypalClient = require("./paypalClient");
// const paypal = require("@paypal/checkout-server-sdk");
const paymentRouter = express.Router();

paymentRouter.post("/create-payment-intent", getPaymentIntent);
paymentRouter.get("/get-payment-status/:sessionId", getPaymentStatus);
// router.post("/create-order", async (req, res) => {
//   const { amount } = req.body;

//   const request = new paypal.orders.OrdersCreateRequest();
//   request.prefer("return=representation");
//   request.requestBody({
//     intent: "CAPTURE",
//     purchase_units: [
//       {
//         amount: {
//           currency_code: "USD",
//           value: amount,
//         },
//       },
//     ],
//   });

//   try {
//     const order = await paypalClient.execute(request);
//     res.json({ id: order.result.id });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error creating order");
//   }
// });

// router.post("/capture-order", async (req, res) => {
//   const { orderId } = req.body;

//   const request = new paypal.orders.OrdersCaptureRequest(orderId);
//   request.requestBody({});

//   try {
//     const capture = await paypalClient.execute(request);
//     res.json(capture.result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error capturing order");
//   }
// });
export default paymentRouter;
