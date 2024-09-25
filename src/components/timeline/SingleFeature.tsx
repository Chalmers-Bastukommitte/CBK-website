import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-8/12">      
          <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-0 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {icon}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {paragraph}
              </p>
              <div className="flex items-center space-x-2"></div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
