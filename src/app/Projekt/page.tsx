import P1 from "@/app/EasyEdit/Projects/Project1";
import P2 from "@/app/EasyEdit/Projects/Project2";
import P3 from "@/app/EasyEdit/Projects/Project3";
import P4 from "@/app/EasyEdit/Projects/Project4";

import { Metadata } from "next";

import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Projekt | CBK",
  description: "Vad vi gjort det senaste.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Projekt"
        description="CBK's senaste projekt."
      />

      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Senaste Projekt"
            paragraph="Förutom att ta hand området och se till så att det är helt, rent och snyggt har vi även genom åren genomfört en rad olika projekt. Här kan du läsa om några av dem."
            center/>
        </div>
      
        <P1/>
        <P2/>
        <P3/>
        <P4/>
        
      </section>

    </>
  );
};

export default AboutPage;
