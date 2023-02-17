import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const experienceItems = [
    {
      companyName: "Durbin Labs Ltd.",
      startDate: "June 2022", endDate: "Present",
      descriptions: [
        "Developing scalable Learning Management Systems and Telemedicine applications with cutting-edge technology",
        "Leading web team in developing and maintaining web applications consisting of 4 developers."
      ],
      position: "Senior Software Engineer",
      techStack: ["Golang", "Node.js", "TypeScript", "Nest.js", "Express.js", "WebSockets", "React.js", "MongoDB", "Redis", "Docker", "AWS", "NGINX"],
    },
    {
      companyName: "TigerIT Bangladesh Ltd.",
      startDate: "March 2021", endDate: "May 2022",
      descriptions: [
        "Built a modern enterprise video communication cloud platform with cutting edge technology",
      ],
      position: "Software Engineer",
      techStack: ["Python", "Node.js", "Python-Flask", "MQTT", "React.js", "PostgreSQL", "Redis", "Celery", "Twilio", "VoIP"],
    },
    {
      companyName: "Durbin Labs Ltd.",
      startDate: "September 2019", endDate: "February 2021",
      descriptions: [
        "Built next-generation cloud solutions for the international market.", "Actively involved in full-stack development in cloud platforms using Node.js, Vue.js, and WebRTC."
      ],
      position: "Software Engineer",
      techStack: ["Node.js", "Express.js", "WebSockets", "Vue.js", "MongoDB", "Redis", "React.js", "AWS", "NGINX"],
    },
    
  ]

  const renderedItems = experienceItems.map((item, index) => {
    return (
      <ExperienceItem
        key={index}
        startDate={item.startDate}
        endDate={item.endDate}
        companyName={item.companyName}
        position={item.position}
        descriptions={item.descriptions}
        techStack={item.techStack}
      />
    )
  })
  return (
    <div className="container px-4 mx-auto leading-7 mt-6">
      <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-right">
        Experience
      </h1>
      <div className="mt-6 text-gray-800 dark:text-white">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {renderedItems}
        </ol>
      </div>
    </div>
  );
}