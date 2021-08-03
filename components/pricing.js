import React from "react";

const Pricing = () => {
  return (
    <div className="mx-auto">
      <div className="relative px-4 pb-10 mt-3 bg-white border-t shadow border-gray-50 border-opacity-10 sm:px-6 lg:px-0 rounded-2xl">
        <div className="-mt-3 text-center">
          <div
            className="flex flex-col items-center space-y-12 text-sm lg:inline-grid lg:items-stretch lg:space-y-0 lg:-mb-5"
            style={{ gridTemplateColumns: "1fr auto 1fr" }}
          >
            <div className="lg:order-1 relative z-20 w-full max-w-[23.125rem] lg:w-auto lg:max-w-none">
              <div
                className="absolute inset-x-0 top-5 bottom-11 bg-gradient-to-b from-indigo-400 to-indigo-500 opacity-15"
                style={{ filter: "blur(52px)" }}
              ></div>
              <div className="relative p-px shadow-md bg-gradient-to-b from-indigo-400 to-gray-900 rounded-xl">
                <div className="pt-16 bg-gray-900 rounded-xl lg:pt-16 lg:pb-8">
                  <div className="lg:px-12 xl:px-16">
                    <h2 className="mb-2 font-semibold tracking-wide text-center text-white uppercase">
                      Pro
                      <span className="absolute left-0 right-0 -top-3">
                        <span className="inline-flex bg-indigo-600 text-white uppercase text-[0.4rem] leading-4 tracking-widest py-1 px-2 border-t border-b border-transparent rounded-lg">
                          Popular
                        </span>
                      </span>
                    </h2>
                    <dl className="flex flex-col items-center text-white">
                      <div className="mb-6">
                        <dt className="sr-only">Price</dt>
                        <dd className="text-base font-medium text-gray-400">
                          <span className="flex items-center justify-center">
                            <del>$150</del>
                            <ins className="mx-3 text-5xl font-extrabold tracking-tight text-indigo-400 no-underline">
                              $99
                            </ins>
                            <span className="text-gray-100">USD / MO</span>
                          </span>
                        </dd>
                      </div>
                      <div className="space-y-4">
                        <dt className="sr-only">Features</dt>

                        <dd className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          First 100 hours / month
                        </dd>
                        <dd className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                            />
                          </svg>
                          First 100 GB Storage / month
                        </dd>
                        <dd className="flex items-center max-w-xs text-left">
                          Ideal for full-time professional tutors and mid-sized
                          agencies.
                        </dd>
                      </div>
                    </dl>
                    <a
                      href="/checkout/4d5ccd7c-c0a3-4440-9f31-401a093dd7ba"
                      className="block p-3 mx-auto mt-8 mb-6 font-semibold text-center text-indigo-900 bg-indigo-400 rounded-lg sm:mt-10 lg:mt-12 w-60 hover:bg-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    >
                      Start free trial
                    </a>
                  </div>
                  <p className="flex justify-center">
                    <a
                      href="#team-pricing"
                      className="flex items-center px-3 py-1 text-gray-200 bg-gray-800 rounded-full hover:bg-gray-700 whitespace-nowrap"
                    >
                      <span>
                        Need more?{" "}
                        <span className="font-medium text-indigo-400">
                          High usage billing
                        </span>
                      </span>
                      <svg
                        width="11"
                        height="10"
                        fill="none"
                        className="ml-1.5 flex-none"
                      >
                        <path
                          d="M5.593 9.277l4.639-4.638L5.593 0l-.895.89 3.107 3.102H0v1.293h7.805L4.698 8.392l.895.885z"
                          fill="#4f46e5"
                        ></path>
                      </svg>
                    </a>
                  </p>
                  <div className="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-30 mt-8"></div>
                </div>
              </div>
            </div>
            <div className="border border-transparent flex flex-col lg:pt-16 lg:pb-[5.25rem] lg:px-12 xl:px-20">
              <h2 className="mb-2 font-semibold tracking-wide text-center text-gray-800 uppercase">
                Starter
              </h2>
              <dl className="flex flex-col items-center mb-auto text-gray-800">
                <div className="mb-6">
                  <dt className="sr-only">Price</dt>
                  <dd className="text-base font-medium text-gray-400">
                    <span className="flex items-center justify-center">
                      <span className="mx-3 text-5xl font-extrabold tracking-tight text-gray-800">
                        $29
                      </span>
                      <span className="text-gray-800">USD / MO</span>
                    </span>
                  </dd>
                </div>
                <div className="space-y-4">
                  <dt className="sr-only">Features</dt>

                  <dd className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    First 30 hours / month
                  </dd>
                  <dd className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                    First 50 GB Storage / month
                  </dd>

                  <dd className="flex items-center p-4 text-left text-gray-900 bg-indigo-100 rounded-xl">
                    Ideal for individuals, tutor groups, or smaller agencies
                    just starting out.
                  </dd>
                </div>
              </dl>
              <a
                href="#"
                className="block p-3 mx-auto mt-8 font-semibold text-center text-gray-800 bg-gray-200 rounded-lg sm:mt-10 lg:mt-12 w-60 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Start free trial
              </a>
              <div className="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-30 mt-12"></div>
            </div>
            <div className="border border-transparent flex flex-col lg:order-1 lg:pt-16 pb-[5.25rem] lg:px-12 xl:px-20">
              <h2 className="mb-2 font-semibold tracking-wide text-center text-gray-800 uppercase">
                Advanced
              </h2>
              <dl className="flex flex-col items-center mb-auto text-gray-800">
                <div className="mb-6">
                  <dt className="sr-only">Price</dt>
                  <dd className="text-base font-medium text-gray-400">
                    <span className="flex items-center justify-center">
                      <span className="mx-3 text-5xl font-extrabold tracking-tight text-gray-800">
                        $199
                      </span>
                      <span className="text-gray-800">USD / MO</span>
                    </span>
                  </dd>
                </div>
                <div className="space-y-4">
                  <dt className="sr-only">Features</dt>
                  <dd className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    First 300 hours / month
                  </dd>
                  <dd className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                    First 300 GB Storage / month
                  </dd>

                  <dd className="flex items-center p-4 text-left text-gray-900 bg-indigo-100 rounded-xl">
                    Ideal for larger companies or developers needing an API.
                  </dd>
                </div>
              </dl>
              <a
                href="#"
                className="block p-3 mx-auto mt-8 font-semibold text-center text-gray-800 bg-gray-200 rounded-lg sm:mt-10 lg:mt-12 w-60 hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
