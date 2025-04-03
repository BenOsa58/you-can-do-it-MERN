import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

function PaymentTest() {
  // const stripe = useStripe();
  // const elements = useElements();
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { error } = await useStripe().createPaymentMethod({
      type: "card",
      card: useElements().getElement(PaymentElement),
    });
    console.log("error :>> ", error);
  };
  return (
    <div>
      <h1>Payment test</h1>
      <form onSubmit={handleOnSubmit}>
        <PaymentElement
          options={{
            layout: {
              type: "tabs",
              defaultCollapsed: false,
            },
            applePay: {
              buttonColor: "black",
            },
            fields: {
              phone: "auto",
              email: "auto",
            },
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PaymentTest;
