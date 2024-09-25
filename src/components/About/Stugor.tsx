import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[650px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-2.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-2.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Kårhuset på landet</h1>
                <div className="mb-3">
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Medlemmar i Chalmers Studentkår innefattas av den Chalmerska Allemansrätten och är välkomna att grilla, bada och mycket mer på Chalmers område i Härryda. Det finns även möjlighet att hyra stugorna.
                  </p>
                </div>
              <div className="mb-3">
                <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Storstugan
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Områdets största stuga med plats för upp till 120 personer vid sittande bankett. 
                Samtidigt kan gästerna njuta av middag med utsikt över sjön utanför.
                </p>
              </div>
              <div className="mb-3">
                <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  CS-Bastun
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Nordens största studentägda, vedeldade bastu. Med sin plats vid sjökanten kan besökare 
                kyla sig själva direkt från bastu till bad efter en ångande session.
                </p>
              </div>
              <div className="mb-3">
                <h3 className="mb-1 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Sportstugan
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                En klassisk sportstuga med en planering av öppet tak. mysig öppen spis, enkelt men modernt kök och gott om sovplats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
