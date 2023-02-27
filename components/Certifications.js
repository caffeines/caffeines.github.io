// import { Image } from "next/image";
import TechStackItem from './TechStackItem';
import { moocs } from '../configs';
import CertificationCard from './CertificationCard';

export default function Certifications() {
  const renderedMoocs = moocs.map((certification, index) => (
    <CertificationCard key={index} id={index} certification={certification} />
  ));
  return (
    <>
      <section className="px-4 mb-10 mt-20">
        {/* <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-12">
          Certificates
        </h1>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 mb-12'>
          {renderedMoocs}
        </div> */}

        <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white text-left mb-12">
          MOOCs
        </h1>
        {/* Mooc course certificates */}
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2'>
          {renderedMoocs}
        </div>
      </section>
    </>
  );
}