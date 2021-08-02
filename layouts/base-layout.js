import React from "react";
import { Navbar, Nav } from "../components";

const BaseLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <main className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="w-full">{children}</div>
      </main>
    </>
  );
};

export default BaseLayout;
