import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakta oss | CBK",
  description: "Information om hur du kan komma i kontakt med oss.",
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
