import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const userSignup = () => {
  const [error, SetError] = useState(null);
  const [isLoading, setLoading] = useState(null);

  const signup = async (email, password) => {
    setLoading(true);
    SetError(null);

    const response = await fetch("/api/user/signup");
  };
};

export default userSignup;
