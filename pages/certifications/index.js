import Head from 'next/head';
import Certifications from '../../components/Certifications';
export default function CertificationsPage() {
  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Certifications</title>
      </Head>
      <Certifications />
    </div>
  );
}