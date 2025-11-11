import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { SignUpUser } from "@/services/api/users";
import RegisterCard from "@/components/RegisterCard";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const respone = await SignUpUser({ email, username, password });
      console.log("success:", respone);
      toast.success("Register success");
    } catch (err) {
      console.log("Error:", err.response?.data);
      const message = err.response?.data?.message || "Register failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,#5044e5_35%,rgba(0,212,255,1)_100%)]">
      <RegisterCard
        email={email}
        username={username}
        password={password}
        setEmail={setEmail}
        setUsername={setUsername}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleRegister}
      />
    </div>
  );
}
