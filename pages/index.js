/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Experience from '../components/Experience';
import Project from '../components/Project';

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
        <Experience />
        <Project />
      </main>
    </div>
  );
}
