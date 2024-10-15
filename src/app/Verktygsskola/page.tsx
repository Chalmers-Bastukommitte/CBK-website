import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verktygsskola | CBK",
  description: "Lär dig mer om verktyg till ved och trä.",
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
                  Verktyg till Ved och Trä
                </h2>
                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[10/6] w-full sm:aspect-[10/6]">
                      <Image
                        src="/images/blog/yxa.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Klyvyxa
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Som namnet indikerar används klyvyxan för att klyva ved. Huvudet på yxan är ofta tungt och brett för att 
                    kunna klyva enklare. Eggen är slipad konkav vilket gör att veden på sätt och vis klyvs exponentiellt och 
                    minskar risken för att huvudet ska fastna. Det finns olika varianter på klyvyxor och de varierar såklart 
                    i storlek men dessa är de som används absolut mest ute i Chalmersbastun.
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    En annan typ av klyvyxa är släggyxa där baksidan på huvudet är härdat för att användas som slägga och 
                    slå ner kilar med. Man ska inte använda vanliga yxor för att slå in kilar.
                  </p>
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>

                <div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Sportyxa
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    En sportyxa eller skogsyxa är oftast mindre och lättare än en traditionell klyvyxa eftersom 
                    det är meningen att den ska tas med på utflykter eller liknande. Eggen är rundad och huvudet 
                    är smalt och långt då denna yxa mest används för att kapa trädets fibrer snanare än att klyva. 
                    Det innebär att en mindre yxa kan användas för kvistning och en större för trädfällning.
                  </p>
                </div>
                
                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>

                <div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Dubbeleggad Yxa
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Dessa yxor är så satans coola och jag vill själv ha en men de är inte så enkla att få tag på. 
                  Dubbeleggade yxor var vanligare förr i tiden och de kunde användas som vapen såväl som i arbete. 
                  De var användbara när det inte fanns motorsåg och man kunde slipa eggarna efter forehand- och 
                  backhandsving eller slipa den ena eggen för fällning och kvistning och den andra för klyvning. 
                  Detta för att man enbart behövde ha med sig en yxa istället för två. Numera används dubbeleggade 
                  yxor mest inom yxkastning, men den var faktiskt så vanlig i Kanada och staterna att den används 
                  som symbol för den proffisionella skogarbetaren i Nordamerika.
                  </p>
                  <div className="mb-10 h-full  rounded">
                  <div className="relative aspect-[] h-full sm:aspect-[]">
                  <Image
                        src="/images/blog/5pmav5Q.png"
                        alt="image"
                        width={700}
                        height={700}
                        className="object-cover object-center"
                      />
                    </div>
                    </div>
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>
                
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Kniv
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Nej jag vet det är varken en yxa eller en vedbit men det är ett viktigt verktyg att ha. 
                  Anledningen att jag har med kniv är för att man dels kan tälja av flis, bark och fnöske 
                  som man kan tända med men den kan också klyva ved. Det kallas för att batonera och det görs 
                  genom att lägga kniven mot vedklabben och banka på bladet med ett vedträ som gärna inte 
                  är det man ska klyva.
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  För att göra detta måste kniven såklart ha ett kraftigt blad som klarar av att man ger 
                  det lite kärlek. Annars riskerar man att böja bladet och/eller förstöra kniven. Det är 
                  väldigt bra för smala trän där ett sving med yxa riskerar att stjälpa mer än hjälpa och 
                  5 andra incitament som du säkert inte vill hugga av.
                  </p>
                  <div>
                </div>
                <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-0 dark:border-white dark:border-opacity-10">
                </div>

                <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Denna text är skriven av vår kära ordförande, <span className="font-bold">RFSU</span>.
                    </p>
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

