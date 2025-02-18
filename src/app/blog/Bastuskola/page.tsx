import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bastuskola | CBK",
  description: "Lär dig mer om bastuvett och etikett.",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/bastu.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Bastuvett och Etikett - En handbok av CBK 
                  </h2>                 
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Att basta är för många en avslappnande aktivitet där man kan koppla av efter ex. 
                    ett träningspass, en skoldag eller bara för att komma ner i varv. Men det kan också 
                    vara ett ställe för sång och nöje! 
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Under CBK:s byggveckor är det inte helt omöjligt att få besök av andra kommittéer 
                    eller vänner och för att så många som möjligt ska trivas har CBK under sina verksamhetsår 
                    utvecklat en slags vett och etikett i hettan:
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Vatten
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Att kasta på vatten på aggregatet kan man göra hur mycket man vill givet att man är 
                    ensam men vill man kasta på vatten vatten på aggregatet när det är fler i bastun är 
                    det bra att kolla så att alla är med på det. Detta är lättast att göra genom att ropa ut &quot;BASTU&quot;, 
                    får man då gensvaret &quot;BAD&quot; är det fritt fram att kasta på vatten. 
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/bastubad.png"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Sång
                  </h3>                                
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Vi sjunger hellre mer än väl och kan man sångerna är det bara sjunga med! Några låtar som vi brukar sjunga är:
                  </p>
                  <p className="mb-8 text-base italic font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Mer och Mer och Mer - Euskefeurat 
                  </p>
                  <p className="mb-8 text-base italic font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Rattlin' Bog - The Irish Rovers (Eller Dalen)
                  </p>
                  <p className="mb-8 text-base italic font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Handelsresande - Euskefeurat 
                  </p>
                  
                  <p className="mb-8 text-base italic font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Sågen - Ola Aurell 
                  </p>
                  <p className="mb-8 text-base font-medium  leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    De är alla låtar som är roliga att sjunga och lära sig sålänge en i sällskapet kan texten och melodin. Egentligen går det att sjunga vilken låt som helst i bastun. Vi rekommenderar glada, 
                    lite komiska och trallvänliga låtar. Att ha en person som leder sången är också bra.</p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Bastu-VM
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Ibland kanske man vill bevisa att man är bäst på att basta längst. Var beredd på att 
                    bli utskrattad skulle du föreslå bastu-VM. Vi bastar för att vi tycker det är kul, skönt och trevligt
                    och inte för att vinna eller visa upp sig.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Klädkod
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Traditionellt brukar man bada bastu naken med en liten handduk att sitta på. 
                    Det viktigaste av allt i bastun är däremot att alla ska trivas och känna sig bekväma.
                    Därför brukar vi ha badkläder eller minst en handduk runt kroppen. 
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/badklader.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                    Det händer att även vi bastar nakna. Men då är vi enbart i sällskap där vi vet att alla är bekväma med det, så som när bastukommitéerna från Sverige, Finland och Norge träffas.
                  </p>
                </div>
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Dryck
                  </h3>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Det är viktigt att dricka mycket vatten innan och efter bastun, annars blir man lätt uttorkad. 
                    Burkar med läsk eller öl går också bra att ta med men ta gärna med en flaska vatten ner till bastun också.
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Den viktigaste regeln vi har är dock att inte ta med sig glas så som sejdlar eller ölflaskor in i bastun. 
                    Skulle man råka tappa ett glas i bastun är det inte bara glaset som går sönder utan även stämningen, och 
                    har man riktigt otur kan det vara svårt att komma ut ut bastun utan att gå på glas. 
                  </p>
              </div>
              <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-medium italic text-body-color">
                      Denna text är skriven av <span className="font-bold">RFSU</span> och  <span className="font-bold">Skråt</span>.
                    </p>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
