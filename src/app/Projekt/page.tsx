import ProjektTrall from "@/components/Projects/ProjektTrall";
import ProjektFlytbrygga from "@/components/Projects/ProjektFlytbrygga";
import ProjektPergiljong from "@/components/Projects/ProjektPergiljong";
import ProjektGrillplats from "@/components/Projects/ProjektGrillplats";

import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projekt | CBK",
  description: "Vad vi gjort det senaste.",
  // other metadata
};

// TODO: Byt about 1&2 till sittande och utbrända

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Projekt"
        description="CBK's senaste projekt."
      />
      <ProjektPergiljong/>
      <ProjektTrall/>
      <ProjektFlytbrygga/>
      <ProjektGrillplats/>

    </>
  );
};

export default AboutPage;
