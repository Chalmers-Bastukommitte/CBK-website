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
  title: "CBK",
  description: "Startsida för Chalmers Bastukommittés hemsida.",
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
