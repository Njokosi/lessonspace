import React from "react";

const Hero = () => {
  return (
    <section className="mb-10 sm:mb-16 md:mb-20">
      <div className="flex items-center justify-center w-12 h-12 mb-8 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </div>
      <p className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-transparent sm:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800">
        Teach, Collaborate online easily.
      </p>
      <p className="max-w-4xl mb-6 space-y-6 text-lg font-medium text-gray-500 sm:text-2xl sm:leading-6">
        Teach live, one-on-one, or with a group, using the most versatile
        collaborative space for online lessons.
      </p>
      <a
        className="inline-flex text-lg font-semibold text-gray-800 transition-colors duration-200 rounded-md sm:text-2xl focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none hover:text-indigo-500"
        href="/"
      >
        Get started -&gt;
      </a>
    </section>
  );
};

export default Hero;
