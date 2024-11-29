import Image from "next/image";

const ProjektPergiljong = () => {
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
                src="/images/project/pergiljong.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/project/pergiljong.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h1 className="mb-9 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Pergiljongen till Huggplatsen
              </h1>
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Under mottagningen kommer alla Chalmers sektioner ut och de nyintagna bjuds på bastu och sittning. En anrik tradition sedan 1960-talet är att de nyintagna får vara med CBK och hugga ved. För att skapa en trevlig plats för detta byggdes en pergiljong/pergola till huggplatsen innan mottagningen 2024 så att ved kan huggas även vid risk för regn.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Utförande
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Veckan innan mottagningen byggdes pergiljongen på tre dagar, en dag för att gjuta grunden och två dagar för att bygga stommen och taket. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjektPergiljong;
