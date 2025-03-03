import stripe from "../config/StripeConfig.js";

const getPaymentIntent = async (req, res) => {
    //get ammount, project name, project id (to add the the donated amount to the project in the database)
    try {
          const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card", "paypal", "bancontact", "giropay", "klarna", "p24", "sepa_debit", "sofort"],
      line_items: [{price_data:{
        currency: "eur",
        product_data: {
          name: "empowering the youth",
        },
        unit_amount: 10000,
      },
         quantity: 1 }],
    mode: "payment",
    success_url: "/success",
    cancel_url: "/cancel",
  });

  return res.json({message:"Payment intent created",stripeSession });
    } catch (error) {
        console.log("error", error);
        return res.json({message:"Payment intent creation failed",error:error.message});
    }

};

export { getPaymentIntent };