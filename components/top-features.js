import React from "react";
import Image from "next/image";

const TopFeatures = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-lg-full bg-teal-accent-400">
            Teach Anyone, Anywhere, Anytime
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Plenty</span>
          </span>{" "}
          Features at your service.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div className="rounded-lg bg-green-50 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div className="flex items-center mb-1">
              <p className="text-lg font-semibold sm:text-base">
                Tons of Tools
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Teach using video conference, text chat, whiteboards, document
              editors, or even code! Whatever subject you're teaching,
              Lessonspace has a tool for you!
            </p>
          </div>
          <div className="rounded-lg bg-pink-50 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div className="flex items-center mb-1">
              <p className="text-lg font-semibold sm:text-base">
                One-Click-Connect
              </p>
            </div>
            <p className="text-sm text-gray-900">
              No unnecessary tutorials or checks before joining. Just click a
              link and get right into the lesson. It couldn't be easier to get
              started.
            </p>
          </div>
          <div className="rounded-lg bg-yellow-50 lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div className="flex items-center mb-1">
              <p className="text-lg font-semibold sm:text-base">
                Advanced Troubleshooting
              </p>
            </div>
            <p className="text-sm text-gray-900">
              No more "Can you hear me?" Advanced troubleshooting helps you
              quickly diagnose and fix any connection issues for both you and
              your students.
            </p>
          </div>
          <div className="rounded-lg lg:p-5 bg-indigo-50 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div className="flex items-center mb-1">
              <p className="text-lg font-semibold sm:text-base">
                Easily teach online
              </p>
            </div>
            <p className="text-sm text-gray-900">
              Lessonspace is an online teaching tool that makes it easy to
              connect and conduct online lessons with your students.
            </p>
          </div>
        </div>
        <div className="relative w-full h-56 md:col-span-2 lg:col-span-2 lg:h-full">
          <Image
            alt="property management"
            layout="fill"
            src="/images/background/engagementblog_timer.gif"
            objectFit="cover"
            objectPosition="bottom"
            className="inset-0 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TopFeatures;
