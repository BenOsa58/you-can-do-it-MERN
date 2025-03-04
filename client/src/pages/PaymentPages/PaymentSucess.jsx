import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const PaymentSucess = () => {   
    const location = useLocation();
    const navigate = useNavigate();
    const [donation, setDonation] = useState(null);
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get("session_id");

    useEffect(() => {
        const fetchPaymentStatus = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/payments/get-payment-status/${sessionId}`);
                console.log("response :>> ", response);
                if (!response.ok) { }
                const result = await response.json();
                console.log("result :>> ", result);
                if(result.message ==="Payment status retrieval failed"){
                    alert(result.message);
                    navigate("/payment/failure");
                }
                if (result.session.status !== "complete") {
                    navigate(result.session.cancel_url);
                }
                if (result.session.status === "complete") {
                    console.log("result :>> ", result);
                    const { projectId, projectName, amount, email, firstName, lastName } = result.session.metadata;
                    const donationInfomation = {
                        donorName: result.session.customer_details.name,
                        donorEmail: result.session.customer_details.email,
                        donorPhone: result.session.customer_details.phone,
                        donorAmount: result.session.amount_total,
                        donorCurrency: result.session.currency,
                        projectId: projectId,
                        projectName: projectName,
                        amount: amount,
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                    }
                    setDonation(donationInfomation);
                    submitDonationToDatabase(donationInfomation);
                }
            } catch (error) {
                console.log("error :>> ", error);
            }
        }
        fetchPaymentStatus();
    }, []);

  const submitDonationToDatabase = async (donationInfomation) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("firstName", donationInfomation.firstName);
    urlencoded.append("lastName", donationInfomation.lastName);
    urlencoded.append("email", donationInfomation.email);
    urlencoded.append("amount", donationInfomation.amount);
    urlencoded.append("projectId", donationInfomation.projectId);
    urlencoded.append("stripeSessionId", sessionId);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
      console.log("donationInfomation.projectId :>> ", donationInfomation.projectId);
    try {
      const response = await fetch(
        // `${process.env.VITE_SERVER_URL}/api/user/donate`,
        `${process.env.VITE_SERVER_URL}/api/projects/donate/${donationInfomation.projectId}`,
        requestOptions
      );
      console.log("response :>> ", response);
      const result = await response.json();
      console.log("result :>> ", result);
      if (result.success) {
        alert(result.message);
      } else {
        alert("Error processing donation: " + result.message);
      }
    } catch (error) {
      console.log("error sending donation :>> ", error.message);
      alert("Error processing donation. Please contact support.");
    }
  };

    return <div>    
        <h2>Donation completed successfully</h2>
{donation && (<div>
    <p>Donor Name: {donation.donorName}</p>
    <p>Donor Email: {donation.donorEmail || "No email provided"}</p>
    <p>Donor Phone: {donation.donorPhone || "No phone provided"}</p>
    <p>Donated Amount: {donation.amount}-{donation.donorCurrency}</p>
</div>)}
    <Link to="/projects">Go to Projects Page</Link>
    </div>;
};

export default PaymentSucess;
