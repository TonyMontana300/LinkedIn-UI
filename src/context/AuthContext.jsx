import React from "react";
import { createContext, useEffect, useState, useCallback } from "react";
import { API_URL } from "../../server/utils/api.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("TOKEN: ", token);
  console.log("USER STATE: ", user);

  const fetchUser = useCallback(async () => {
    try {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      console.log("FETCHING USER...");

      const res = await fetch(`${API_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response status: ", res.status);

      const data = await res.json();
      setUser(data);

      console.log("Fetched user from backend: ", data);
      
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      setLoading(true);
      fetchUser();
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [token, fetchUser]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, fetchUser, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
