import React, { createContext, useState } from "react";
import {
  login,
  fetchUserProfile,
  SignUpUser,
  logoutUser,
} from "@/services/api/users";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [userInfo, setUserInfo] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );

  const [role, setRole] = useState(userInfo?.role || null);

  const loginUser = async (email, password) => {
    try {
      const res = await login({ email, password });
      if (res.status === 200) {
        const data = res.data;
        toast.success("Login successful");

        setUserInfo(data);
        localStorage.setItem("userInfo", JSON.stringify(data));

        const profile = await fetchUserProfile();
        setUserInfo({ ...data, ...profile });
        setRole(profile.user?.role);

        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...data, ...profile })
        );
      }
      return res;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  const signUpUser = async (userData) => {
    try {
      const res = await SignUpUser(userData);
      if (res.status === 201) {
        toast.success("Sign Up successful");
        return res;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Sign Up failed");
    }
  };

  const logoutUserContext = async () => {
    try {
      const res = await logoutUser();
      if (res.status === 200) {
        toast.success("Logout successful");
        setUserInfo(null);
        setRole(null);
        localStorage.removeItem("userInfo");
      }
      return res;
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        loginUser,
        signUpUser,
        logoutUserContext,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
