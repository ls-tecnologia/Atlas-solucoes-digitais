import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "AC CLIMA",
    niche: "Climatização",
    result: "Presença digital profissional",
    image: "/images/acclimape.webp",
    tags: ["Landing page", "SEO Local", "Mobile First"],
  },
  {
    id: 2,
    title: "GM Climatização e Elétrica",
    niche: "Climatização e Elétrica",
    result: "Autoridade no Google",
    image: "/images/gmclimape.webp",
    tags: ["Landing Page", "Alta Conversão", "Mobile First"],
  },
  {
    id: 3,
    title: "Climar Soluções",
    niche: "Climatização",
    result: "Autoridade e credibilidade fortalecidas.",
    image: "/images/climarrecife.webp",
    tags: ["Landing page", "Autoridade", "Premium"],
  },
  {
    id: 4,
    title: "Mattos Elétrica e Automação",
    niche: "Elétrica e Automação",
    result: "Mais visibilidade e geração de novas oportunidades",
    image: "/images/mattoseletrica.webp",
    tags: ["landing page", "SEO Local", "Visibilidade"],
  },
  {
    id: 5,
    title: "VOERAPIDO.com",
    niche: "Agência de Turismo",
    result: "Automação da triagem de orçamentos, otimizando o atendimento e aumentando a eficiência da equipe.",
    image: "/images/voerapido.webp",
    tags: ["Landing Page", "Sistema de Orçamento", "Mobile First"],
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-slate-900/50 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projetos que geram <span className="text-cyan-400">Resultados Reais</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Não colecionamos apenas sites bonitos. Colecionamos histórias de empresas que cresceram através do digital.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-900/50 transition-all duration-300 flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-cyan-500 text-sm font-medium uppercase tracking-wider">{item.niche}</span>
                      <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">O Problema</p>
                      <p className="text-slate-400 text-sm">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">A Solução</p>
                      <p className="text-slate-400 text-sm">{item.solution}</p>
                    </div>
                    <div className="bg-green-950/20 border border-green-900/30 p-3 rounded-lg">
                      <p className="text-xs text-green-500 uppercase font-bold mb-1">Resultado</p>
                      <p className="text-green-400 font-medium text-sm">{item.result}</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full group-hover:bg-cyan-950/30 group-hover:text-cyan-400 group-hover:border-cyan-900/50" asChild>
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      Quero um resultado assim <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-cyan-950/20 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Sua empresa é o nosso próximo case de sucesso?
          </h2>
          <Button size="lg" variant="glow" className="h-14 px-8 text-lg" asChild>
            <Link href="https://wa.me/5511999999999" target="_blank">
              Solicitar Orçamento
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
