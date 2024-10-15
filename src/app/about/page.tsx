import Sittande from "@/components/Sittande";
import Utbranda from "@/components/Utbranda";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | CBK",
  description: "Om sittande och utbrända i CBK.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Om oss"
        description="Här kan du läsa mer om vår kommitté och vad vi gör."
      />
      <Sittande/>
      <Utbranda/>
    </>
  );
};

export default AboutPage;
