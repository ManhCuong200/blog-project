import React from "react";
import Logo from "../../assets/Logo.png";
import { DropdownMenuAuth } from "../DropdownMenuAuth";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="xl:container mx-auto py-4 fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
        <Link to="/">
          <img className="logo max-w-12 cursor-pointer" src={Logo} alt="logo" />
        </Link>
        <div className="flex justify-end items-center gap-2">
          <Link to="/login">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#5044E5] hover:bg-[#5044E5] h-9 px-4 py-2 has-[&gt;svg]:px-3 text-white cursor-pointer"
            >
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
                className="lucide lucide-plus text-white"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Create Blog
            </button> 
          </Link>
          <button
            onClick={() => toggleTheme()}
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer"
          >
            {currentTheme === "dark" ? (
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down"
              >
                <path d="M0 0h24v24H0z" stroke="none" fill="none"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M12 5l0 .01"></path>
                <path d="M17 7l0 .01"></path>
                <path d="M19 12l0 .01"></path>
                <path d="M17 17l0 .01"></path>
                <path d="M12 19l0 .01"></path>
                <path d="M7 17l0 .01"></path>
                <path d="M5 12l0 .01"></path>
                <path d="M7 7l0 .01"></path>
              </svg>
            ) : (
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
                className="lucide lucide-moon"
              >
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
            )}
          </button>

          <DropdownMenuAuth
            data-slot="popover-trigger"
            class="aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs dark:bg-input/30 dark:border-input inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[&gt;svg]:px-3"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-_r_1_"
            data-state="closed"
          >
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
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </DropdownMenuAuth>
        </div>
      </div>
    </div>
  );
};

export default Header;
