import Head from 'next/head';
import Image from 'next/image';
import styles from '../assets/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sadat</title>
        <meta name='description' content='caffeines' />
        <meta name='name' content='sadat' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className='flex justify-center items-center w-screen h-screen text-6xl'>
          Welcome to{' '}
          <a
            href='https://www.linkedin.com/in/sadatsayem/'
            target='_blank'
            rel='noreferrer'
            className='text-sky-700'
          >
            Sadat&apos;s{' '}
          </a>{' '}
          profile
        </h1>
      </main>
    </div>
  );
}
