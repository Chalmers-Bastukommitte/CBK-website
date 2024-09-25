import Timeline from "@/components/timeline";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tidslinje | CBK",
  description: "CBK's historia.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tidslinje"
        description="..."
      />
      
      <Timeline/>


    </>
  );
};

export default AboutPage;
