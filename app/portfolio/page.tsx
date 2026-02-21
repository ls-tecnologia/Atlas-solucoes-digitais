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
    title: "Advocacia Moderna",
    niche: "Jurídico",
    problem: "Escritório tradicional sem presença digital e dependente de indicações.",
    solution: "Site institucional sóbrio e autoritário, focado em conversão para WhatsApp.",
    result: "+150% em contatos qualificados no primeiro mês.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["Institucional", "SEO Local", "Google Ads"],
  },
  {
    id: 2,
    title: "Clínica Odontológica",
    niche: "Saúde",
    problem: "Agenda vazia e dificuldade em atrair pacientes para procedimentos de alto valor.",
    solution: "Landing page focada em implantes e estética, com prova social forte.",
    result: "Agenda lotada e ROI de 5x no investimento.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Landing Page", "Alta Conversão", "Mobile First"],
  },
  {
    id: 3,
    title: "Construtora Elite",
    niche: "Construção Civil",
    problem: "Site antigo que não transmitia a qualidade dos empreendimentos.",
    solution: "Site visual com galerias imersivas e tour virtual.",
    result: "Venda de 3 unidades de alto padrão atribuídas ao site.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Showcase", "Galeria", "Premium"],
  },
  {
    id: 4,
    title: "Tech Solutions",
    niche: "Tecnologia",
    problem: "Startup precisando validar produto e captar leads B2B.",
    solution: "One-page moderna com explicação clara da solução SaaS.",
    result: "50 demos agendadas na semana de lançamento.",
    image: "https://picsum.photos/800/600?random=4",
    tags: ["SaaS", "B2B", "Lead Gen"],
  },
  {
    id: 5,
    title: "Restaurante Gourmet",
    niche: "Gastronomia",
    problem: "Baixa visibilidade no Google Maps e cardápio PDF difícil de ler.",
    solution: "Site com cardápio digital interativo e integração com reserva.",
    result: "Aumento de 30% nas reservas diretas.",
    image: "https://picsum.photos/800/600?random=5",
    tags: ["Cardápio Digital", "Local SEO", "Reservas"],
  },
  {
    id: 6,
    title: "Consultoria Financeira",
    niche: "Finanças",
    problem: "Baixa autoridade percebida online.",
    solution: "Blog corporativo e área de materiais ricos para captura de leads.",
    result: "Posicionamento como autoridade no setor.",
    image: "https://picsum.photos/800/600?random=6",
    tags: ["Blog", "Inbound Marketing", "Autoridade"],
  },
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
