import React from "react";
import { Navbar } from "../components";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="w-full lg:flex">{children}</div>
      </main>
    </>
  );
};

export default BaseLayout;
