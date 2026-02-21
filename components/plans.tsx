"use client";

import { Button } from "@/components/ui/button";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Essencial",
    description: "Ideal para empresas que precisam iniciar sua presença digital com profissionalismo e começar a ser encontradas.",
    features: [
      "Site estratégico de alta conversão",
      "Otimização Google Maps",
      "SEO local básico",
      "Integração com WhatsApp",
      "Hospedagem rápida e segura",
    ],
    cta: "Quero começar",
    highlight: false,
  },
  {
    name: "Crescimento",
    description: "Para empresas que querem gerar oportunidades constantes e aumentar a previsibilidade de clientes.",
    features: [
      "Tudo do Essencial",
      "Estrutura de captação de leads",
      "Páginas estratégicas",
      "Melhorias de conversão",
      "Suporte e ajustes contínuos",
    ],
    cta: "Quero crescer",
    highlight: true,
  },
  {
    name: "Autoridade",
    description: "Para empresas que desejam se posicionar como referência no mercado e fortalecer a confiança.",
    features: [
      "Tudo do Crescimento",
      "SEO avançado",
      "Estratégia digital completa",
      "Posicionamento de marca",
      "Experiência premium",
    ],
    cta: "Quero me destacar",
    highlight: false,
  },
  {
    name: "Personalizado",
    description: "Soluções sob medida para empresas com necessidades específicas, sistemas ou projetos mais complexos.",
    features: [
      "Projetos exclusivos",
      "Sistemas e automações",
      "Integrações",
      "Consultoria estratégica",
      "Planejamento digital",
    ],
    cta: "Quero algo sob medida",
    highlight: false,
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Soluções para diferentes momentos do seu negócio
          </h2>
          <p className="text-slate-400 text-lg">
            Após entender sua empresa, recomendamos a melhor estrutura para gerar resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-slate-900/80 border-cyan-500/50 shadow-lg shadow-cyan-900/20"
                  : "bg-slate-900/40 border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/60"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-500/20">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-3 ${plan.highlight ? "text-white" : "text-slate-200"}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed min-h-[80px]">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                      plan.highlight ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-500 group-hover:text-cyan-500 group-hover:bg-cyan-950/30 transition-colors"
                    }`}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? "glow" : "outline"} 
                className={`w-full ${!plan.highlight && "border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400"}`}
                asChild
              >
                <Link href="https://wa.me/5511999999999" target="_blank">
                  {plan.cta}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Extra Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Não sabe qual é o ideal?
            </h3>
            <p className="text-slate-400 mb-8">
              Fale com a Atlas e receba um diagnóstico rápido para entender o melhor caminho para o seu negócio.
            </p>
            
            <Button size="lg" variant="outline" className="group border-cyan-500/30 hover:bg-cyan-950/30 hover:text-cyan-400 hover:border-cyan-500/50 h-auto py-4 whitespace-normal text-center" asChild>
              <Link href="https://wa.me/5511999999999" target="_blank">
                <MessageCircle className="mr-2 w-5 h-5 group-hover:text-green-400 transition-colors shrink-0" />
                Conversar no WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
