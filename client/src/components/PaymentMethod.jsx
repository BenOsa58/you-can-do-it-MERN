import React, { useState } from "react";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting donation using: ${paymentMethod}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Donation Form</h1>

      <label>
        Donation Amount:
        <input type="number" name="amount" min="1" required />
      </label>

      <h3>Select Payment Method:</h3>
      <label>
        <input
          type="radio"
          value="creditCard"
          checked={paymentMethod === "creditCard"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Credit Card
      </label>
      <label>
        <input
          type="radio"
          value="bankAccount"
          checked={paymentMethod === "bankAccount"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        Bank Account
      </label>
      <label>
        <input
          type="radio"
          value="paypal"
          checked={paymentMethod === "paypal"}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        PayPal
      </label>

      {paymentMethod === "creditCard" && (
        <div>
          <h3>Credit Card Details</h3>
          <label>
            Card Number:
            <input type="text" name="cardNumber" required />
          </label>
          <label>
            Expiration Date:
            <input type="text" name="expiry" placeholder="MM/YY" required />
          </label>
          <label>
            CVV:
            <input type="text" name="cvv" required />
          </label>
        </div>
      )}

      {paymentMethod === "bankAccount" && (
        <div>
          <h3>Bank Account Details</h3>
          <label>
            Account Number:
            <input type="text" name="accountNumber" required />
          </label>
          <label>
            Routing Number:
            <input type="text" name="routingNumber" required />
          </label>
        </div>
      )}

      {paymentMethod === "paypal" && (
        <div>
          <h3>PayPal</h3>
          <p>You will be redirected to PayPal after submitting the form.</p>
        </div>
      )}

      <button type="submit">Donate</button>
    </form>
  );
};

export default PaymentMethod;
