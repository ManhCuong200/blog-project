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
  const { logoutUserContext, role } = useContext(AuthContext);
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
        className="w-50 p-1 rounded-xl shadow-lg border bg-white overflow-hidden"
      >
        {role ? (
          <>
            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer data-[highlighted]:bg-[#5044E5] "
            >
              <Link to="/my-posts" className="flex items-center gap-3">
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
                  className="w-4 h-4 text-gray-500 transition-colors group-hover:text-white"
                >
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                  <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 12l.01 0"></path>
                  <path d="M13 12l2 0"></path>
                  <path d="M9 16l.01 0"></path>
                  <path d="M13 16l2 0"></path>
                </svg>
                <span className="text-[16px] group-hover:text-white">My Posts</span>
              </Link>
            </DropdownMenuItem>

            {role === "admin" && (
              <DropdownMenuItem
                asChild
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer data-[highlighted]:bg-[#5044E5]"
              >
                <Link to="/user-management" className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-user-scan w-4 h-4 text-gray-500 group-hover:text-white"
                  >
                    <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
                    <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
                    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
                    <path d="M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2"></path>
                  </svg>
                  <span className="text-[16px] group-hover:text-white">User Management</span>
                </Link>
              </DropdownMenuItem>
            )}

            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer data-[highlighted]:bg-[#5044E5]"
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
              <span className="text-[16px] group-hover:text-white">Logout</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md data-[highlighted]:bg-[#5044E5]"
            >
              <Link
                to="/login"
                className="flex items-center gap-2 group-hover:bg-[#5044E5]"
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
                  className="w-4 h-4 text-gray-500 transition-colors group-hover:text-white"
                >
                  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
                  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
                  <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
                  <path d="M8 15a18 18 0 0 0 1.8 6"></path>
                  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
                </svg>
                <span className="text-[16px] group-hover:text-white">Login</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              asChild
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md data-[highlighted]:bg-[#5044E5]"
            >
              <Link to="/" className="flex items-center gap-2 ">
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
                  className="w-4 h-4 text-gray-500 transition-colors group-hover:text-white"
                >
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M16 19h6"></path>
                  <path d="M19 16v6"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                </svg>
                <span className="text-[16px] group-hover:text-white">Sign up</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
