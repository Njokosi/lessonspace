import React from "react";
// background-image: radial-gradient(circle at 51% 111%,#1285f3,#003a99 86%);





const Card = () => {
  return (
    <div
      className="flex justify-center w-full mb-6 text-center bg-white border-t shadow border-gray-50 border-opacity-10 rounded-2xl lg:relative"
      style={{ width: "235px" }}
    >
      <a
        className="flex flex-col justify-between w-full h-full px-4 py-1 mx-5 bg-white border-none card"
        href="https://laracasts.com/topics/laravel"
        style={{ height: "84px", minWidth: "205px" }}
      >
        <div className="flex items-center flex-1">
          <div className="flex justify-center mr-4">
            <img
              data-src="/images/customers/tutorfly.png"
              alt="laravel-logo.svg topic icon"
              className=" ls-is-cached lazyloaded"
              src="/images/customers/tutorfly.png"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default function Customers() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2">
        <div className="left-0 py-6">
          <Card />
        </div>
      </div>
    </div>
  );
}
