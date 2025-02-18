import Image from "next/image";

const ProjektTrall = () => {
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
                src="/images/project/altan.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/project/altan.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h1 className="mb-9 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Storstugans uteplats
              </h1>
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Storstugan uteplats var i behov av trallbyte. Därför bytes samtliga brädor ut under sommaren 2024.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Utförande
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Bytet skedde i ettapper under sommaren, så att stugan kunde användas under tiden. Under Juni månad byttes den första delen av trallen ut av CBK och Kårhuskommittén, och under Augusti månad byttes den sista delen ut av samtliga sittande i CBK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjektTrall;
