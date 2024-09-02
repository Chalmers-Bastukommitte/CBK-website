import Sittande from "@/components/About/Sittande";
import Utbranda from "@/components/About/Utbranda";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

// TODO: Byt about 1&2 till sittande och utbrända

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
