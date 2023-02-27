/* eslint-disable @next/next/no-img-element */
import ProjectCard from './ProjectCard';
import { projects } from '../configs';

function Project() {
  const renderProjects = projects.map((project, index) => (
    <ProjectCard key={index} id={index}  project={project} />
  ));
  return (
    <>    
      <section className="px-4 mb-10 mt-20">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left">
          Projects
        </h1>
        <div className="mt-16 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 cursor-pointer">
          {renderProjects}
        </div>
      </section>
    </>
  );
}
export default Project;