import React from "react";
import { Navbar } from "../components";

const BaseLayout = (props) => {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto max-w-8xl">
        <div className="lg:flex">
          <MainContent children={props.children} />
        </div>
      </main>
    </>
  );
};

export default BaseLayout;
