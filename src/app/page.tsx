"use client";

import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 -z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-pattern.svg')] bg-repeat bg-center -z-10"></div>
        <div className="absolute -bottom-8 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-8 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10"></div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Just a</h1>
          <p className="mt-4 text-lg">Picture of Animal</p>
          <Image
            src="/aa.jpg"
            alt="Hero Image"
            width={500}
            height={300}
            className="mt-6 rounded-lg shadow-lg bg-red-200"
          />
        </div>
      </section>
    </Layout>
  );
}
