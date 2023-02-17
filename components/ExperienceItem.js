
function DescriptionItem({descriptionItem}) {
  return (
    <li className="list-disc">
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {descriptionItem}
      </p>
    </li>
  )
}

const logos = {
  // "golang":
  //   <div className=" ">
  //     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M21.468 3.206c.713 1.474-1.455 1.631-1.344 2.289c.204 1.186.065 2.947-.092 4.68c-.27 2.937 1.927 9.97-2.65 12.796c-.862.538-2.91.834-4.93.88h-.019c-2.02-.046-4.346-.342-5.208-.88c-4.568-2.826-2.372-9.859-2.631-12.796c-.167-1.733-.306-3.494-.093-4.68c.111-.658-2.057-.806-1.343-2.289c.611-1.27 2.122-.148 2.501-.547C7.596.65 9.95.111 11.803.065h1.02c1.843.093 4.197.593 6.143 2.594c.38.399 1.881-.722 2.502.547Zm-10.036 7.7c-.083.038-.222.946.204.992c.288.028 1.075.12 1.26 0c.362-.232.325-.788.121-.927c-.343-.222-1.492-.11-1.585-.064Zm-2.352-6.8c-.955-.111-2.558.778-2.799 2.669c-.26 1.964 2.057 3.91 4.281 1.964c1.196-1.047 1.613-4.272-1.482-4.633Zm6.45 0c-3.096.361-2.679 3.586-1.483 4.633c2.223 1.946 4.54 0 4.28-1.964c-.231-1.89-1.834-2.78-2.798-2.669Z" /><path d="M12.313 8.988c.584-.083 1.983.584 1.89 1.372c-.111.917-3.605 1.038-3.79-.056c-.111-.667.417-1.093 1.9-1.316Zm7.885 7.386c-.287-.01-.472-.39-.472-.621c0-.417.055-.908.361-1.121c.63-.436 1.13 1.751.111 1.742Zm-15.78 0c-1.02.009-.52-2.178.111-1.742c.306.213.361.704.361 1.12c0 .233-.185.612-.472.622Zm13.844 6.718c.185.269.194.454-.102.593c-1.13.519-2.14-.176-1.76-.37c.805-.408 1.306-1.048 1.862-.223Zm-11.908.093c.556-.825 1.057-.186 1.863.222c.38.195-.63.89-1.76.37c-.297-.138-.288-.324-.103-.592Z" /><path d="M19.735 3.429c.046-.195.528-.288.797.046c.324.398-.473.945-.51.723c-.092-.603-.342-.575-.287-.77Zm-14.854 0c.056.194-.195.166-.287.769c-.037.222-.834-.325-.51-.723c.26-.334.741-.241.797-.046Zm10.86 4.512a1.056 1.056 0 1 1 0-2.112a1.056 1.056 0 0 1 0 2.112Zm-.278-1.177a.334.334 0 1 0 0-.667a.334.334 0 0 0 0 .667Zm-4.105 2.67c.111-.427.5-.566.816-.575c.806-.019 1.112.417 1.14.76c.055.583-2.206.722-1.956-.186ZM8.875 7.94a1.056 1.056 0 1 1 0-2.112a1.056 1.056 0 0 1 0 2.112Zm.278-1.177a.334.334 0 1 0 0-.667a.334.334 0 0 0 0 .667Z" /></g></svg>
  //   </div>,
  // "react": 
}

function TechStackItem({ tech }) {
  const getLogo = () => {
    if (tech?.toLowerCase() in logos) {
      return logos[tech?.toLowerCase()]
    }
    return <></>
  }

  return (
    <li className="px-2 py-1 mr-2 mb-2 text-xs font-medium leading-none text-white  bg-gray-700 rounded-full dark:text-white dark:bg-gray-700 flex">
      {getLogo()}
      <span className="ml-1">{tech}</span>
    </li>
  )
}

export default function ExperienceItem({ startDate, endDate, companyName, position, descriptions, techStack, link }) {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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