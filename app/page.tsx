import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Solution } from "@/components/solution";
import { Process } from "@/components/process";
import { Plans } from "@/components/plans";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <Process />
      <Plans />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
