import Project from '../components/Project';
import Head from 'next/head';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Projects</title>
      </Head>
      <Project />
    </div>
  );
}