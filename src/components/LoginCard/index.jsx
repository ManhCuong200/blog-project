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

export default function LoginCard() {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl py-6">
      <CardHeader className="flex items-center justify-center pb-2">
        <img className="w-15 h-15" src={Logo} alt="Logo" />
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-4">
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <Button type="submit" className="w-full bg-[#5044E5] text-white">
            Login
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
