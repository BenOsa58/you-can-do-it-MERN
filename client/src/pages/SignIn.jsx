import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { AuthContext } from "../components/context/AuthContext";

export default function SignIn() {
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setUser({ username: data.user.username, email: data.user.email });
      console.log("data :>> ", data);
      setLoading(false);
      if (!data.token) {
        console.log(
          "login was not completed, try again with the correct credentials"
        );
        return;
      }
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.success === false) setError(true);
      // navigate("/projects");
      return;
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SigIn</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sign-form">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <div>
          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 
            rounded-lg uppercase hover: opacity-95 
            disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </div>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Don't have an account?</p>
        <Link to="/signup">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "Something went wrong!"}</p>
    </div>
  );
}
