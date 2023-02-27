/* eslint-disable @next/next/no-img-element */
import Head  from 'next/head';
import { skills } from '../../configs';

const Skill = ({ skill }) => {

  const { name, exps, image, level } = skill;
  return (
    <>
      {/* Generate JS skill square badge with Next.js */}
      <div className="flex justify-items-center max-w-md mb-2 mr-2 border-2 border-gray-500 rounded-md p-2">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 bg-white rounded-md p-1" />
        <div className="ml-4">
          <div className="text-gray-400 text-sm">{exps}</div>
          <div className="font-semibold">{name}</div>
        </div>
      </div>
    </>
  )
}

export default function SkillPage() {
  const renderSkills = skills.map((skill, index) => {
    console.log("skill: ", skill);
    return (
      <li key={index} className="flex justify-between items-center mb-2">
        <Skill skill={skill} />
      </li>
    )
  });

  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <div className="max-w-4xl mx-auto antialiased">
        <section className="px-4 mb-10 mt-20">
          <h1 className="flex text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-3">Skills</h1>
          <ul className="flex mt-20 flex-wrap">
            {renderSkills}
          </ul>
        </section>
      </div>

    </>
  )
}