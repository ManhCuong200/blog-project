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

export default function LoginCard({
  email,
  password,
  setEmail,
  setPassword,
  loading,
  handleSubmit,
}) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl py-6">
      <CardHeader className="flex items-center justify-center pb-2">
        <Link to="/">
          <img className="w-15 h-15" src={Logo} alt="Logo" />
        </Link>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          <Button
            // onClick={() => handleSubmit()}
            type="submit"
            className="w-full bg-[#5044E5] text-white"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner /> Logging in...
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center pt-1 pb-0">
        <p className="text-sm text-muted-foreground">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#5044E5] hover:underline">
            Signup
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
