import Head from 'next/head';
import Articles from '../../components/Articles';

export default function ArticlesPage() {
  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Articles</title>
      </Head>
      <Articles />
    </div>
  );
}