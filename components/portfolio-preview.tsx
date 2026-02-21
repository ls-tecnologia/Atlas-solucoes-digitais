"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "AC Clima",
    niche: "Climatização",
    result: "Presença digital profissional",
    image: "/images/acclimape.webp",
  },
  {
    id: 2,
    title: "Mattos Elétrica e Automação",
    niche: "Elétrica e Automação",
    result: "Mais visibilidade digital e conquista de um novo contrato relevante.",
    image: "/images/mattoseletrica.webp",
  },
  {
    id: 3,
    title: "VOERAPIDO.com",
    niche: "Agência de turismo",
    result: "Automação da triagem de orçamentos, otimizando o atendimento e aumentando a eficiência da equipe.",
    image: "/images/voerapido.webp",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Cases de Sucesso</h2>
            <p className="text-slate-400 max-w-xl">
              Veja como ajudamos outras empresas a se destacarem no mercado digital.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/portfolio">
              Ver todos os projetos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-900/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-cyan-500 mb-2 uppercase tracking-wider">
                  {project.niche}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 border-t border-slate-800 pt-4 mt-4">
                  <span className="text-green-400 font-medium">Resultado:</span> {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
