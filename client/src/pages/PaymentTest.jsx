// import {
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import React from "react";

// function PaymentTest() {
//   const handleOnSubmit = async (event) => {
//     event.preventDefault();
//     const { error } = await useStripe().createPaymentMethod({
//       type: "card",
//       card: useElements().getElement(PaymentElement),
//     });
//     console.log("error :>> ", error);
//   };
//   return (
//     <div>
//       <h1>Payment test</h1>
//       <form onSubmit={handleOnSubmit}>
//         <PaymentElement />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default PaymentTest;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
// import { CardElement, Elements, useElements, useStripe } from "../../src";

import "../styles/common.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentTest = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default PaymentTest;
