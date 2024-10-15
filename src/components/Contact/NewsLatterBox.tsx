"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
                      <div className="relative aspect-[97/90] w-full sm:aspect-[97/90]">
                      <a href="https://www.instagram.com/bastukommitten/">
                        <Image
                          src="/images/about/insta.png"
                          alt="image"
                          fill
                          className="object-cover object-center"
                        />
                      </a>
                    </div>
                <br></br>
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Följ oss på Instagram
      </h3>
      <p className=" pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
       Härliga bilder från våra event och annat skoj! Följ oss på Instagram för att inte missa något och glöm inte att skriva till oss om du vill aspa!
      </p>
    </div>
  );
};

export default NewsLatterBox;
