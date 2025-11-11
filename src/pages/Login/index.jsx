import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { loginUser } from "@/services/api/users";
import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // nếu call api thành công thì sẽ trả về user
      const user = await loginUser({ email, password });
      console.log("✅ Login successful:", user);
      toast.success("Login successful!");
    } catch (err) {
      // neu user ko nhap thong tin ma an submit sẽ hiện thông báo lỗi "email" is not allowed to be empty
      if (err?.response?.status === 400) {
        toast.error('"email" is not allowed to be empty');
        return;
      }
      // neu user nhap sai thong tin de dang nhap thi se hien thi thong bao loi cho nguoi dung biet email hoac password khong dung
      if (err?.response?.status === 401) {
        toast.error(err?.response?.data?.message || "sai email hoặc mật khẩu");
        return;
      }
      toast.error("Login failed. Please try again.");
      console.log("❌ Error full:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,#5044e5_35%,rgba(0,212,255,1)_100%)]">
      <LoginCard
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        loading={loading}
        handleSubmit={handleLogin}
      />
    </div>
  );
}
