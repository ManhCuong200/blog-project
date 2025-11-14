import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export function DropdownMenuAuth() {
  const [open, setOpen] = useState(false);
  const { role, logoutUserContext } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUserContext();
    setOpen(false);
    navigate("/login");
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-10 w-10 p-0 flex items-center justify-center cursor-pointer"
        >
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 mt-2 shadow-lg border bg-white p-1 rounded-md"
      >
        {role ? (
          <>
            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:text-[#5044E5]"
            >
              <Link to="/my-posts" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 transition-colors group-hover:text-black"
                >
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 12l.01 0"></path>
                  <path d="M13 12l2 0"></path>
                  <path d="M9 16l.01 0"></path>
                  <path d="M13 16l2 0"></path>
                </svg>
                <span>My Posts</span>
              </Link>
            </DropdownMenuItem>

            {role === "admin" && (
              <DropdownMenuItem
                asChild
                onClick={() => setOpen(false)}
                className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:text-[#5044E5]"
              >
                <Link to="/user-management" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <circle cx="19" cy="11" r="3"></circle>
                    <path d="M19 14v3"></path>
                    <path d="M19 4v3"></path>
                    <path d="M22 11h-3"></path>
                    <path d="M16 11h-3"></path>
                  </svg>
                  <span>User Management</span>
                </Link>
              </DropdownMenuItem>
            )}

            <DropdownMenuItem
              onClick={handleLogout}
              className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:text-[#5044E5]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-gray-500 transition-colors"
              >
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M9 12h12l-3 -3"></path>
                <path d="M18 15l3 -3"></path>
              </svg>
              <span>Logout</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:text-[#5044E5]"
            >
              <Link to="/login" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 transition-colors group-hover:text-black"
                >
                  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
                  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
                  <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
                  <path d="M8 15a18 18 0 0 0 1.8 6"></path>
                  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
                </svg>
                <span>Login</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:text-[#5044E5]"
            >
              <Link to="/signup" className="flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-gray-500 transition-colors group-hover:text-black"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M16 19h6"></path>
                  <path d="M19 16v6"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                </svg>
                <span>Sign up</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
