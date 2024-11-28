"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/favicon.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/favicon.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <div className="flex items-center">
                  
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
          
          </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Chalmers Studentkår
                </h2>
                <ul>
                  <li>
                  <a href="https://chalmersstudentkar.se/"
                  className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >Startsida</a>
                    
                  </li>
                  <li>
                  <a href="https://chalmersstudentkar.se/recreation-harryda/"
                  className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >Läs på om och boka området</a>
                    
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Sociala medier
                </h2>
                <ul>
                <a
                  href="https://www.facebook.com/ChalmersBastukommitte"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <div className="flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                    <p className="ml-2">Chalmers Bastukommitté, CBK</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/bastukommitten/"
                  aria-label="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                  <div className="flex items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.577.334-3.608 1.366-1.031 1.031-1.307 2.327-1.366 3.608-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.334 2.577 1.366 3.608 1.031 1.031 2.327 1.307 3.608 1.366 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.577-.334 3.608-1.366 1.031-1.031 1.307-2.327 1.366-3.608.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.334-2.577-1.366-3.608-1.031-1.031-2.327-1.307-3.608-1.366-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.207 0-4-1.793-4-4s1.793-4 4-4 4 1.793 4 4-1.793 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"
                      fill="currentColor"
                      />
                    </svg>
                    <p className="ml-2">Bastukommitten</p>
                </div>
              </a>
            </ul>
          </div>
      </div>
      </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
