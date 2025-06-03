/* eslint-disable @next/next/no-img-element */
import React from "react"
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogRedirectPage() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    /* eslint-disable */
    router.replace(`/blogs/page/${id}`);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Redirecting</title>
      </Head>
      <p>
        Redirecting to the blog page...
      </p>
    </div>
  );
}