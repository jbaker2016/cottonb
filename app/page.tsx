import Hero from "./components/Hero";
import Newest from "./components/Newest";
import BenefitsList from "./components/BenefitsList";
import OurStory from "./components/OurStory";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <OurStory />
      <BenefitsList />
    </div>
  );
}
