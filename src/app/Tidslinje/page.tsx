import Sittande from "@/components/Sittande";
import Utbranda from "@/components/Utbranda";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tidslinje | CBK",
  description: "CBK's historia.",
  // other metadata
};

// TODO: Byt about 1&2 till sittande och utbrända

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tidslinje"
        description="..."
      />
      <Sittande/>
      <Utbranda/>
    </>
  );
};

export default AboutPage;
