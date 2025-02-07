import React, { Children, useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // console.log("children :>> ", children);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      const token = localStorage.getItem("token");
      // console.log("token :>> ", token);
      if (!token) {
        console.error("User needs to Sign in");
        return;
      }
      try {
        const response = await fetch(
          "http://localhost:5000/api/user/checkStatus",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        console.log("userData :>> ", userData);
        setUser(userData.user);
      } catch (error) {
        console.error("Error fetching user status:", error);
      }
    };

    fetchUserStatus();
  }, []);

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("token");
    console.log("You are sign out");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
