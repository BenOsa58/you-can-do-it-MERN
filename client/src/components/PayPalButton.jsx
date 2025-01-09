import React, { useEffect } from "react";

const PayPalButton = ({ amount }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: async () => {
            const response = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ amount }),
            });
            const data = await response.json();
            return data.id;
          },
          onApprove: async (data) => {
            const response = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ orderId: data.orderID }),
            });
            const result = await response.json();
            console.log("Payment captured: ", result);
            alert("Thank you for your donation!");
          },
        })
        .render("#paypal-button");
    };
  }, [amount]);

  return <div id="paypal-button"></div>;
};

export default PayPalButton;
