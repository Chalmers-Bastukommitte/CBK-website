import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vedskola | CBK",
  description: "Lär dig mer om träslag och hur de används.",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Träsorter och hur det används
                </h2>
                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/oak.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Ädelträ
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Ädelträ räknas oftas som de träslagen man använder för finsnickeri och inkluderar bl.a. ek, bok och ask. 
                    De är de mest energirika träslagen och det beror till stor del på sin täta struktur. Ek är, av de tidigare nämnda, 
                    det vanligaste att elda med men inte lika vanligt som barr och björk. Eken bör torka åtminstone något år innan 
                    det eldas då det innehåller en del garvsyra som kan orsaka sot. Ek brinner långsamt men det bränner snabbt i plånboken.

                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Ek är som sagt tätt och därmed hårt vilket gör att det kan vara svårt att klyva. De har dock raka fibrer så 
                  se bara till att ta i rejält så löser det sig.
                  </p>
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>

                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/pine.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Gran och Tall
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Gran och tall är de näst mest använda trädslagen för att elda. De har ett lite lägre energiinnehåll än björk 
                    varav tallen är lite bättre än granen. Har man en öppen kamin kanske man vill undvika dessa sorter då de kan 
                    sprätta och smälla mer än en dimmig morgon i Lützen. Gran och tall brinner snabbt och kan vara bra att tända 
                    med men man vill undvika att enbart elda snabbt då mycket av värmen riskerar att försvinna ut genom skorstenen.

                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Gran är oftast ganska knotig p.g.a. alla grenar som växer på stammen vilket leder till att fibrerna kan gå lite 
                    hur som helst. Det kan vara svårt och har du otur klyver du bara ditt smalben. Tall är rakare och det växer inte 
                    lika många grenar på tall förutom i kronan vilket gör det enklare att klyva. Men oavsett hur bra kluvet något är 
                    brinner det mesta (om man stänker på lite 2-takt från sågen bara).
                  </p>
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>
                
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/birch.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Björk
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Björk är ett av de vanligaste och mest eftertraktade träslagen att elda. Det brinner med en klar 
                    låga och sprätter inte som tall och gran kan göra. Energiinnehållet är också relativt högt men 
                    inte rikgtigt lika högt som ek.

                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Björk är enkelt att klyva såvida man klyver med rätt sida av yxan. Det är inte särskilt knotigt 
                    eller massivt och fibrerna brukar vara raka. Vissa klabbar av björk kallar vi för smörbitar just 
                    p.g.a. dess färg och mjukhet. De är extremt lätta att klyva och jag fick höra av någon som fick 
                    höra av någon att hans moster klöv en smörbit genom att bara titta på den.
                  </p>
                  
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Denna text är skriven av vår kära ordförande, <span className="font-bold">RFSU</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
