import Head from "next/head";
import { Customers, Pricing, Statistics } from "../components";
import { BaseLayout } from "../layouts";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <>
      <Head>
        <title>Lessonspace</title>
        <link rel="icon" href="/images/logo-lessonspace.svg" />
      </Head>

      <BaseLayout>
        <div className="px-4 mx-auto my-12 lg:my-28 max-w-8xl sm:px-6 lg:px-8">
          <div className="w-full">
            <Pricing />
          </div>
        </div>

        <div className="relative p-px overflow-hidden bg-black shadow-md bg-gradient-to-b from-indigo-400 to-gray-900">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <Customers />
          </div>
        </div>
      </BaseLayout>
    </>
  );
}
