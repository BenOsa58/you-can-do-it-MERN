import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsList";
import GetInvolved from "./pages/GetInvolved";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Footer from "./pages/Footer";
import { AuthContext } from "./components/context/AuthContext";
import CreateProject from "./pages/CreateProject";
import ProjectsDropdown from "./pages/ProjectsDropdown";
import SingleProject from "./pages/SingleProject";
import PaymentTest from "./pages/PaymentTest";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentSucess from "./pages/PaymentPages/PaymentSucess";
import PaymentFailure from "./pages/PaymentPages/PaymentFailure";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const options = {
    // passing the client secret obtained from the server
    // clientSecret: "client secret here",

    appearance: {
      theme: "stripe",
    },
    mode: "payment",
    amount: 1099,
    currency: "usd",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <Router>
        <Navbar handleOpen={handleOpen} />
        <ProjectsDropdown open={open} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<SingleProject />} />
          <Route path="/getInvolved" element={<GetInvolved />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route
            path="/payment/success/:sessionId"
            element={<PaymentSucess />}
          />
          <Route path="/payment/failure" element={<PaymentFailure />} />
          <Route path="/createProject" element={<CreateProject />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/payment-test" element={<PaymentTest />} />
        </Routes>
        <Footer />
      </Router>
    </Elements>
  );
}

export default App;
