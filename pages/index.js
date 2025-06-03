import React from "react"

import Head from 'next/head';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sadat</title>
        <meta name='description' content='caffeines' />
        <meta name='name' content='sadat' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className="max-w-4xl mx-auto mt-4 antialiased">
        <About />
      </main>
    </div>
  );
}
