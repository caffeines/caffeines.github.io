import Experience from '../components/Experience';
import Head from 'next/head';

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Projects</title>
      </Head>
      <Experience />
    </div>
  );
}