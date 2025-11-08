import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
import { SignUpUser } from "@/components/services/api/users";
import { toast } from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterCard() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    if (!email || !username || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    //BLOck load form
    e.preventDefault();
    try {
      setLoading(true);
      const respone = await SignUpUser({ email, username, password });
      console.log("success:", respone);
      toast.success("Register success");
      navigate("/Login");
    } catch (err) {
      console.log(err);
      toast.error("Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl py-6">
      <CardHeader className="flex items-center justify-center pb-2">
        <img className="w-15 h-15" src={Logo} alt="Logo" />
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <Button
            onClick={() => handleRegister()}
            disabled={loading}
            type="submit"
            className="w-full bg-[#5044E5] text-white"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner /> Signing Up
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center pt-1 pb-0">
        <p className="text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link to="/login" className="text-[#5044E5] hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
