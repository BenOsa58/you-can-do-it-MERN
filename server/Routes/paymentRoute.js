import express from "express";
import {
  getPaymentIntent,
  getPaymentStatus,
} from "../controllers/paymentsController.js";

const paymentRouter = express.Router();

paymentRouter.post("/create-payment-intent", getPaymentIntent);
paymentRouter.get("/get-payment-status/:sessionId", getPaymentStatus);

export default paymentRouter;
