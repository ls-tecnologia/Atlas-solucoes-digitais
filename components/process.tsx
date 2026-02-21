"use client";

import { MessageSquare, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico",
    description: "Conversamos para entender seu negócio, seus objetivos e quem é seu cliente ideal.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Estratégia & Design",
    description: "Criamos o layout e a estrutura focada em conversão e posicionamento no Google.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Lançamento",
    description: "Seu site vai ao ar pronto para receber visitantes e gerar contatos no WhatsApp.",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Como Funciona</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Processo simplificado para colocar sua empresa no digital sem dor de cabeça.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-800 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-xl relative group hover:border-cyan-500/50 transition-colors duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-slate-950">
                  {step.number}
                </div>
                <step.icon className="w-10 h-10 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
