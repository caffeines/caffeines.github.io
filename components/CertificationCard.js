/* eslint-disable @next/next/no-img-element */

export default function CertificationCard({ certification }) {
  const { title, issuer, issuerImage, issueDate, certLink } = certification;
  return (
    <>
      <div className="sm:max-w-sm lg:max-w-md mt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 transition ease-in-out delay-150 hover:border-dashed hover:bg-slate-100">
        {/* <div className="bg-white rounded-lg shadow-lg dark:bg-gray-800"> */}
        <div className="p-4">
          <div className="flex items-center">
            <div className="p-1 mr-4 text-white bg-white rounded-md dark:bg-white h-18 w-18">
              <img src={issuerImage} alt="" className="max-h-xs max-w-xs" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {issuer}
              </p>
              <p className="font-semibold text-gray-700 dark:text-white">
                {title}
              </p>

              {/* Issue Date */}
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Issued {issueDate}
              </p>
              {/* View Certificate */}
              <a href={certLink} target="_blank" rel="noreferrer">
                <button className="mt-2 font-semibold dark:text-white rounded-md border border-slate-500 p-2 hover:dark:border-white hover:border-black">
                  View Certificate
                </button>
              </a>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
