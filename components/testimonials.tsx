"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "AC Clima",
    content: "Super dedicado, atencioso e honesto em seu trabalho, já indiquei e continuo indicando seu trabalho",
    stars: 5,
  },
  {
    name: "GM Climatização e Elétrica",
    content: "Ótimo serviço! Site bem feito, rápido e exatamente como eu precisava. Atendimento claro e eficiente. Recomendo.",
    stars: 5,
  },
  {
    name: "Evaldeir Ferreira",
    role: "Climar Soluções",
    content: "Muito prestativo e paciente, atendeu todas minhas necessidades. Presta um bom serviço e passa confiança para o cliente!",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 border-y border-slate-800/50 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          O que nossos clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed italic">
                &quot;{item.content}&quot;
              </p>
              <div>
                <p className="text-white font-bold">{item.name}</p>
                <p className="text-slate-500 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
