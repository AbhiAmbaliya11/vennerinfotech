import AboutHero from "@/components/About/AboutHero/AboutHero";
import AboutIntro from "@/components/About/AboutIntro/AboutIntro";
import AboutMission from "@/components/About/AboutMission/AboutMission";
import AboutTeam from "@/components/About/AboutTeam/AboutTeam";
import AboutExcellence from "@/components/About/AboutExcellence/AboutExcellence";
import AboutCTA from "@/components/About/AboutCTA/AboutCTA";

export const metadata = {
  title: "About Us | Venner Infotech",
  description: "Learn about Venner Infotech — a leading technology solutions provider delivering innovative software since 2015. Our mission, vision, and story.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutMission />
      <AboutTeam />
      <AboutExcellence />
      <AboutCTA />
    </main>
  );
}
