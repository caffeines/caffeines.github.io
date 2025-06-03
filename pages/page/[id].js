export default function ProjectDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  // redirect to /blogs/page/:id
  useEffect(() => {
    if (id) {
      router.replace(`/blogs/page/${id}`);
    }
  }, [id, router]);
  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>Redirecting...</title>
      </Head>
    </div>
  );
}