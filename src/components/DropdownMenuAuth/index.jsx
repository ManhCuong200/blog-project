import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function DropdownMenuAuth() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-9 w-9 p-0 rounded-md flex items-center justify-center cursor-pointer"
        >
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 mt-2 rounded-md shadow-lg"
      >
        <DropdownMenuItem asChild onClick={() => setOpen(false)}>
          <Link
            to="/login"
            className="flex items-center gap-2 group cursor-pointer"
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
              className="w-4 h-4 text-[#6b7280] group-hover:text-white "
            >
              <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
              <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
              <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
              <path d="M8 15a18 18 0 0 0 1.8 6"></path>
              <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
            </svg>
            Login
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild onClick={() => setOpen(false)}>
          <Link
            to="/register"
            className="flex items-center gap-2 group cursor-pointer"
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
              className="w-4 h-4 text-[#6b7280] group-hover:text-white"
            >
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
            Sign up
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
