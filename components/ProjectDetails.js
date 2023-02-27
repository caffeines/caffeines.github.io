import TechStackItem from './TechStackItem';
import { BiArrowBack } from 'react-icons/bi';
import { FiLink } from 'react-icons/fi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { VscTools } from 'react-icons/vsc';

import Router from 'next/router';
/* eslint-disable @next/next/no-img-element */

function ProjectDetails({project, id}) {
  const goBack = () => {
    Router.push('/projects');
  }
  const associatedWithView = () => {
    if (project?.associatedWith?.companyName) {
      return (
        <div className="flex items-center mt-4 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-4 ring-gray-200 dark:ring-gray-700 dark:bg-white">
            <img className="rounded-full shadow-lg px-1 py-1" src={project?.associatedWith?.companyLogo} alt="" />
          </span>
          <span>Associated with {project?.associatedWith?.companyName}</span>
        </div>
      )
    } else {
      return (
        <></>
      )
    }
  }

  return (
    <>
      <section className="px-4 mb-10 mt-20">
        <h1 className="flex text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-3">
          <span className='cursor-pointer mr-4 hover:bg-slate-700 hover:rounded-md hover:text-white ease-in-out' onClick={goBack}>
            <BiArrowBack />
          </span>
          {project.title}
        </h1>
        {/* Associated with company name with pic */}
        {associatedWithView()}
        {/* subtitle of the project */}
        <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-100">
          {project.longDescription}
        </p>

        {/* project contribution list */}
        <div className="mt-8 space-y-2">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-md">
                <AiOutlineFileDone className='text-xl'/>
              </span>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">My Contributions</h3>
              {/* Project contribution list */}
              <ul className="mt-2 text-sm text-gray-900 dark:text-gray-100">
                {project?.workDescriptions?.map((desc, index) => {
                  return (
                    <li key={index} className="ml-5 list-disc">
                      {desc}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-md mt-8">
                {/* <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg> */}
                <VscTools className='text-white'/>
              </span>
            </div>
            <div className="ml-3 mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Tech Stack</h3>
              <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap p-1">
                {project?.techStack?.map((tech, index) => {
                  return (
                    <TechStackItem
                      key={index}
                      tech={tech}>
                    </TechStackItem>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-8">
              <span className="flex items-center justify-center w-8 h-8 text-white bg-gray-500 rounded-md">
                <FiLink />
              </span>
            </div>
            <div className="ml-3 mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Links</h3>
              <ul className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
                    {project.link}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}

export default ProjectDetails;