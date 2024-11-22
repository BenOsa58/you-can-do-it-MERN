import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import DonateForm from "../components/DonateForm";
import { useRef } from "react";

const Donate = () => {
  const [showDonateForm, setShowDonateForm] = useState(false);

  const donateFormRef = useRef(null);
  const handleDonateFormButton = () => {
    setShowDonateForm(true);
  };

  // useEffect(() => {
  //   if (donateFormRef.current) {
  //     donateFormRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [showDonateForm]);

  return (
    <div>
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
            // donateFormRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Donate Now
        </Button>
      )}

      {showDonateForm && (
        <DonateForm
          donateFormRef={donateFormRef}
          setShowDonateForm={setShowDonateForm}
          showDonateForm={showDonateForm}
        />
      )}
    </div>
  );
};

export default Donate;
