import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const PaymentSucess = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paymentIntent = searchParams.get("payment_intent");
    const paymentMethod = searchParams.get("payment_method");
    const paymentStatus = searchParams.get("payment_status");
    const paymentAmount = searchParams.get("payment_amount");
    const paymentCurrency = searchParams.get("payment_currency");
    const paymentDescription = searchParams.get("payment_description");
    const paymentReceiptUrl = searchParams.get("payment_receipt_url");
    const paymentCustomerEmail = searchParams.get("payment_customer_email");
    const paymentCustomerName = searchParams.get("payment_customer_name");
    return <div>    
        <h1>Payment Sucess</h1>
        <p>Payment Intent: {paymentIntent}</p>
        <p>Payment Method: {paymentMethod}</p>
        <p>Payment Status: {paymentStatus}</p>
        <p>Payment Amount: {paymentAmount}</p>
        <p>Payment Currency: {paymentCurrency}</p>
        <p>Payment Description: {paymentDescription}</p>
        <p>Payment Receipt URL: {paymentReceiptUrl}</p>
        <p>Payment Customer Email: {paymentCustomerEmail}</p>
        <p>Payment Customer Name: {paymentCustomerName}</p>
    <Link to="/projects">Go to Projects Page</Link>
    </div>;
};

export default PaymentSucess;
