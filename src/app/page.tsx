import Aspa from "@/components/About/Aspa";
import Stugor from "@/components/About/Stugor";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Sittande from "@/components/Sittande";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Sittande />
      <Aspa />
      <Stugor />
      <Blog />
      <Contact />
    </>
  );
}
