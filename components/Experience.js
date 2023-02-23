import ExperienceItem from "./ExperienceItem";
import { experiences } from "../configs";

export default function Experience() {
  const renderedItems = experiences.map((item, index) => {
    return (
      <ExperienceItem
        key={index}
        startDate={item.startDate}
        endDate={item.endDate}
        companyName={item.companyName}
        position={item.position}
        descriptions={item.descriptions}
        techStack={item.techStack}
        image={item.image}
      />
    )
  })
  return (
    <div className="container px-4 mx-auto leading-7 mt-20">
      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left">
        Experience
      </h1>
      <div className="mt-16 text-gray-800 dark:text-white">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          {renderedItems}
        </ol>
      </div>
    </div>
  );
}