'use client'

import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Just a</h1>
        <p className="mt-4 text-lg">Picture of Animal</p>
        <Image src="/aa.jpg" alt="Hero Image" width={500} height={300} className="mt-6 rounded-lg shadow-lg bg-red-200" />
      </div>
    </Layout>
  );
}
