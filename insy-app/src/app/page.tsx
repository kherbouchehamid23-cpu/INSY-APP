import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Chatbot } from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary text-white">
      <Hero />
      <Services />
      <Chatbot />
    </div>
  );
}
