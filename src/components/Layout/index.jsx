import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggletheme = () => {
    const nexttheme = theme === "dark" ? "light" : "dark";
    setTheme(nexttheme);
    localStorage.setItem("theme", nexttheme);
  };
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header toggleTheme={toggletheme} currentTheme={theme} />
        <main className="flex-1 mt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
