import Background from "../../../public/images/hero/hero_ht24.jpg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[240px] xl:pb-[160px] xl:pt-[320px] 2xl:pb-[200px] 2xl:pt-[400px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 15, 33, 0.8), rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0)), 
                            url(${Background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[800px] text-center">
        <h1 className="mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          
        </h1>
            <p className="mb-12 text-base !leading-relaxed text-white dark:text-white sm:text-lg md:text-xl">

            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
