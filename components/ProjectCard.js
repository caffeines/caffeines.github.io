import TechStackItem from './TechStackItem';
/* eslint-disable @next/next/no-img-element */
function ProjectCard({ project }) {
  const { title, description, techStack, image, link } = project;
  return (
    <div className="sm:max-w-sm lg:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 transition ease-in-out delay-150 hover:border-dashed hover:dark:bg-black hover:bg-slate-100">
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <ul className="flex flex-wrap mt-4 text-sm font-normal text-gray-500 dark:text-white">
        {techStack.map((tech, index) => {
          return (
            <TechStackItem
              key={index}
              tech={tech}>
            </TechStackItem>
          )
        })}
        </ul>
        {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Read more
          <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a> */}
      </div>
    </div>
  );
}

export default ProjectCard;