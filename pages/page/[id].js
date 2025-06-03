/* eslint-disable @next/next/no-img-element */
import React from "react"
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogRedirectPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    router.replace(`/blogs/page/${id}`, undefined, { shallow: true });
  }, [id, router]);

  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Redirecting</title>
      </Head>
    </div>
  );
}