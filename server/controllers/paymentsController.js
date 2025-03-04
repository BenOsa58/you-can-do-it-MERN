import stripe from "../config/StripeConfig.js";

const getPaymentIntent = async (req, res) => {
    // console.log("req.body :>> ", req.body);
    //get ammount, project name, project id (to add the the donated amount to the project in the database)
    try {
          const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "paypal", "bancontact", "giropay", "klarna", "p24", "sepa_debit", "sofort"],
      line_items: [{price_data:{
        currency: "eur",
        product_data: {
            name: req.body.projectName,
 
            metadata: {
              projectId: req.body.projectId,

              firstName: req.body.firstName,
              lastName: req.body.lastName,
            }
          },
        // product: req.body.projectId,
        unit_amount: req.body.amount*100,
      },
          
         quantity: 1 }],
              mode: "payment",
              customer_email: req.body.email,
           metadata: {
              projectId: req.body.projectId,
              projectName: req.body.projectName,
              amount: req.body.amount,
              email: req.body.email,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
          },
    
    success_url: `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/payment/failure`   
  });

  return res.json({message:"Payment intent created",stripeSession });
    } catch (error) {
        console.log("error", error);
        return res.json({message:"Payment intent creation failed",error:error.message});
    }

};
const getPaymentStatus = async (req, res) => {
    // console.log("req.params :>> ", req.params);
    const { sessionId } = req.params;
    console.log("sessionId :>> ", typeof sessionId);
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        // console.log("session :>> ", session);
    // const customer = await stripe.customers.retrieve(session.customer);


    if(!session){
        return res.status(404).json({message:"Session not found"});
    }
    if(session.status !== "complete"){
        return res.status(400).json({message:"Payment not completed"});
    }
    return res.status(200).json({session});
    } catch (error) {
        console.log("error", error);
        return res.json({message:"Payment status retrieval failed",error:error.message});
    }
};

export { getPaymentIntent, getPaymentStatus };