import Head from "next/head";
import { Pricing, Statistics } from "../components";
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
        <Pricing />
        {/* <Statistics /> */}
      </BaseLayout>
    </>
  );
}
