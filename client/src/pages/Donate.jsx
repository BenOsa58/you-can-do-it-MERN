import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PaymentMethod from "../components/PaymentMethod";
import DonateForm from "../components/DonateForm";
import { useRef } from "react";

const Donate = () => {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  const donateFormRef = useRef(null);
  const handleDonateFormButton = () => {
    setShowDonateForm(true);
    setShowPaymentMethod(true);
  };
  return (
    <div className="Donate">
      <h2>Support Us by Donating</h2>
      <p>Your Donation Can Change LIVES!</p>
      <p>
        Every donation, no matter the size, makes a real difference in the lives
        of those we serve. Your donation will help us continue our work towards
        creating a better future for all.
      </p>
      {!showDonateForm && (
        <Button
          variant="success"
          onClick={(e) => {
            handleDonateFormButton(e);
          }}
        >
          Donate Now
        </Button>
      )}
      <p>
        Data Privacy: We take utmost care of of your personal data and will
        never sell or share it to any third parties. Your confidential
        information such as credit card or bank details is not stored on our
        system and we do not call donors for their credit/debit card PIN or
        internet banking password.
      </p>
      {showDonateForm && (
        <DonateForm
          donateFormRef={donateFormRef}
          setShowDonateForm={setShowDonateForm}
          showDonateForm={showDonateForm}
          showPaymentMethod={showPaymentMethod}
        />
      )}
    </div>
  );
};

export default Donate;
