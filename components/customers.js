import React from "react";
import { customers } from "../constants/customers";
// background-image: radial-gradient(circle at 51% 111%,#1285f3,#003a99 86%);

const Card = ({ img, title }) => {
  return (
    <div
      className="flex justify-center w-full mb-6 text-center bg-white border-t shadow border-gray-50 border-opacity-10 rounded-2xl lg:relative"
      //   style={{ width: "235px" }}
    >
      <a
        className="flex flex-col justify-between w-full h-full px-4 py-1 mx-5 bg-white border-none"
        href="https://laracasts.com/topics/laravel"
        style={{ height: "84px", minWidth: "205px" }}
      >
        <div className="flex items-center justify-center flex-1">
          <div className="flex justify-center">
            <img
              dataSrc="/images/customers/tutorfly.png"
              alt="laravel-logo.svg topic icon"
              className="object-contain object-center ls-is-cached lazyloaded"
              src={img}
            />
          </div>
        </div>
      </a>
    </div>
  );
};

const CustomerCard = ({ img, title }) => {
  return (
    <div className="flex justify-center h-24 col-span-1 p-6 bg-white shadow border-gray-50 border-opacity-10 rounded-2xl">
      <img src={img} className="object-contain" />
    </div>
  );
};

export default function Customers() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {customers.map((c) => {
        return (
          <div key={c.title} className="col-span-2">
            <div className="left-0">
              <CustomerCard img={c.img} title={c.title} />
              {/* <Card key={c.title} img={c.img} title={c.title} /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
