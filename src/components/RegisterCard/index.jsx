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
import { Spinner } from "@/components/ui/spinner";

export default function RegisterCard({
  email,
  username,
  password,
  setEmail,
  setUsername,
  setPassword,
  loading,
  handleSubmit,
}) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl py-6">
      <CardHeader className="flex items-center justify-center pb-2">
        <img className="w-15 h-15" src={Logo} alt="Logo" />
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Enter your email"
          />
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            type="text"
            placeholder="Enter your username"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button
            // onClick={() => handleSubmit(e)}
            type="submit"
            className="w-full bg-[#5044E5] text-white"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner /> Signing Up...
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center pt-1 pb-0">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5044E5] hover:underline">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
