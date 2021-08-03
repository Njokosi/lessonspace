import React from "react";

const Features = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Property Management
          </p>
        </div>
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <span class="relative">Easily</span>
          </span>
          manage your properties, track payments.
        </h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <div class="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
          <div class="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div class="flex items-center mb-1">
              <p class="text-lg font-semibold sm:text-base">
                Manage your rentals
              </p>
            </div>
            <p class="text-sm text-gray-900">
              Take a good look at the recipe. Don’t just skim it; read it
              through from start to finish. As you read, visualize doing the
              steps which will help when you’re prepping.
            </p>
          </div>
          <div class="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div class="flex items-center mb-1">
              <p class="text-lg font-semibold sm:text-base">Plan your budget</p>
            </div>
            <p class="text-sm text-gray-900">
              All recipes are written using certain conventions, which define
              the characteristics of common ingredients. The rules vary from
              place to place.
            </p>
          </div>
          <div class="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div class="flex items-center mb-1">
              <p class="text-lg font-semibold sm:text-base">Contract leases</p>
            </div>
            <p class="text-sm text-gray-900">
              Check the “prep time” and “total time” listed at the top to be
              sure you have enough time to complete the recipe. Look for hints,
              such as the words “meanwhile” .
            </p>
          </div>
          <div class="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-blue-50">
            <div class="flex items-center mb-1">
              <p class="text-lg font-semibold sm:text-base">Instant payments</p>
            </div>
            <p class="text-sm text-gray-900">
              Missing a prep instruction can leave you scrambling in the middle
              of a recipe. Keep your eyes peeled for time-consuming steps and be
              careful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
