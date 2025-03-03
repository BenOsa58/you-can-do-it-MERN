const PaymentFailure = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paymentIntent = searchParams.get("payment_intent");
    const paymentMethod = searchParams.get("payment_method");
    const paymentStatus = searchParams.get("payment_status");   

    return <div>
        <h1>Payment Failure</h1>
        <p>Payment Intent: {paymentIntent}</p>
        <p>Payment Method: {paymentMethod}</p>
        <p>Payment Status: {paymentStatus}</p>
        <Link to="/projects">Go to Projects Page</Link>
        </div>;
};

export default PaymentFailure;
    
