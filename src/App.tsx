import Layout from "@/components/Layout";

import HackathonThemes from "@/components/sections/HackathonThemes";
import AboutSection from "./components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import Timeline from "@/components/sections/Timeline";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import ScrollUpButton from "@/components/ui/scrollup";

import {
  title,
  caption,
  targetDate,
  registrationLink,
  learnMoreLink,
  faqs,
  events,
  themes,
  links,
  info,
} from "@/data";
import BackgroundAnimation from "./components/ParticleAnimation/BackgroundAnimation";


function App() {
  return (
    <>
      <Layout>
      <BackgroundAnimation/>
        <HeroSection
          title={title}
          caption={caption}
          targetDate={targetDate}
          registrationLink={registrationLink}
          learnMoreLink={learnMoreLink}
        />
        <AboutSection />
        <HackathonThemes themes={themes} />
        <Timeline events={events} />
        <FAQ faqs={faqs} />
        <Footer title={title} caption={caption} links={links} />
      </Layout>
    </>
  );
}

export default App;
