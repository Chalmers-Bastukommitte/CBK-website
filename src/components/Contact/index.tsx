import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Undrar du något?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Skicka ett mail till <a href="mailto:bastu@cbk.chs.chalmers.se" className="text-blue-500 underline">bastu@cbk.chs.chalmers.se</a> så svarar vi så snart vi kan.
              </p>
              <div className="relative aspect-[10/5] w-full sm:aspect-[10/5]">

                        <Image
                          src="/images/about/mailto.jpg"
                          alt="image"
                          fill
                          className="object-cover object-center"
                        />
                        </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
