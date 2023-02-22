/* eslint-disable @next/next/no-img-element */
import TechStackItem from './TechStackItem';

function DescriptionItem({descriptionItem}) {
  return (
    <li className="list-disc">
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {descriptionItem}
      </p>
    </li>
  )
}


export default function ExperienceItem({ startDate, endDate, companyName, position, descriptions, techStack, link, image }) {
  return (
    <li className="mb-10 ml-10">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full -left-3 ring-4 ring-gray-200 dark:ring-gray-700 dark:bg-white">
        <img className="rounded-full shadow-lg px-1 py-1" src={image} alt=""/>
      </span>
      {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
      <time className="flex mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z" /></svg>
        <span className="ml-2">{startDate} - {endDate}</span>
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {position}
      </h3>
      <p className="mb-4 text-base font-bold text-gray-500 dark:text-gray-400">{companyName}</p>
      <ul className="ml-1 text-base font-normal text-gray-500 dark:text-gray-400">
        {descriptions.map((descriptionItem, index) => {
          return (
            <DescriptionItem
              key={index}
              descriptionItem={descriptionItem}
            />
          )
        })}
      </ul>
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
    </li>
  )
}