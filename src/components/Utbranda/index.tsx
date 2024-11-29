import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import peopleData from "@/app/.Modify_Information/Utbranda/peopleData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Utbrända"
            paragraph="Chalmers Bastukommitté har funnits sedan 2003 och har sedan dess haft många som hjälpt till att förverkligas Chalmers Studentkårs vision om Kårhuset på Landet. Nedan följer en lista på de som suttit i CBK tidigare."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {peopleData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
