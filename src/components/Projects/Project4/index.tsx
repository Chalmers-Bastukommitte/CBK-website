import Image from "next/image";

const ProjektGrillplats = () => {
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
                src="/images/project/grillplats.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/project/grillplats.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <h1 className="mb-9 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                Ny gemensam grillplats
              </h1>
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                I mitten av området byggdes en ny grillplats med sittplatser i tall och en stor öppen grill. Grillplatsen är tänkt att vara en mysig samlingsplats och går att nyttja av såväl de som hyr stugorna och innefattas av den Chalmerska Allemansrätten.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Utförande
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Grillplatsen byggdes under våren 2024. Ytan för grillplatsen grävdes ut och fylldes med grus, och sittplatserna byggdes av tallstockar. Grillen är en stor öppen grill som går att använda av flera personer samtidigt och består av en betongcylinder på en meter i diameter och tillhörande grillgaller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjektGrillplats;
