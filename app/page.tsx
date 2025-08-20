import { HeroSection } from '@/components/sections/HeroSection';
import { AboutProduct } from '@/components/sections/AboutProduct';
import { Advantages } from '@/components/sections/Advantages';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Team } from '@/components/sections/Team';
import { VideoPreview } from '@/components/sections/VideoPreview';
import { Services } from '@/components/sections/Services';
import { Contacts } from '@/components/sections/Contacts';
import { Navigation } from '@/components/ui/Navigation';
import { ChatBot } from '@/components/ui/ChatBot';
import { Footer } from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutProduct />
      <Advantages />
      <CaseStudies />
      <Team />
      <VideoPreview />
      <Services />
      <Contacts />
      <Footer />
      <ChatBot />
    </main>
  );
}
