import React from "react";
import { Navbar } from "../components";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto max-w-8xl">
        <div className="lg:flex">{children}</div>
      </main>
    </>
  );
};

export default BaseLayout;
