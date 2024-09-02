import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kom i kontakt med oss"
        description="Fyll i formuläret nedan för att komma i kontakt med oss eller maila dirket till bastu@cbk.chs.chalmers.se. Följ oss också gärna på sociala medier."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
