import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "src/app/EasyEdit/Sittande/peopleData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Chalmers Bastukommitté"
            paragraph="CBK är Chalmers Bastukommitté och ansvarar för att förvalta stugorna och bastun ute i Härryda.
              Vi älskar oss ett riktigt skönt bastubad, ett dopp i sjön och att hugga ved."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
