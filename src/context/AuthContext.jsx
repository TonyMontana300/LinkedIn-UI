import React from "react";
import { createContext, useEffect, useState, useCallback } from "react";
import { API_URL } from "../../server/utils/api.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const res = await fetch(`${API_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUser(data);
      
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
