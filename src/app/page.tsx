import FeatureSection from "@/components/feature-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MetaBrain from "@/components/huly-metabrain";
import JoinUsSection from "@/components/join-us";
import Navbar from "@/components/navbar";
import SyncWithGithub from "@/components/sync-with-github";
import WorkTogether from "@/components/work-together";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WorkTogether />
      <SyncWithGithub />
      <MetaBrain />
      <JoinUsSection />
      <Footer />
    </>
  );
}
