import React from "react";
import { Navbar, Nav } from "../components";

const BaseLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "radialGradient(circle at 51% 111%,#E0E7FF,#EEF2FF 86%)",
      }}
    >
      <Nav />
      <main>
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
