import Head from 'next/head';
import { useState, useEffect } from 'react';
import ProjectDetails from '../../components/ProjectDetails';
import { useRouter } from 'next/router';
import { projects } from '../../configs';

export default function ProjectDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState({});

  useEffect(() => {
    if (id) { setProject(projects[Number(id)]) }
    console.log(projects[id]);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto antialiased">
      <Head>
        <title>{project?.title}</title>
      </Head>
      <ProjectDetails project={project} id={Number(id)} />
    </div>
  );
}