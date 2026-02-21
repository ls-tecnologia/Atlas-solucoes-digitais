"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "Sócio, Silva & Associados",
    content: "Depois do site novo, paramos de depender apenas de indicações. Hoje recebemos contatos diários pelo Google.",
    stars: 5,
  },
  {
    name: "Amanda Oliveira",
    role: "Dra. Estética Avançada",
    content: "Profissionalismo impecável. A Atlas entendeu exatamente o posicionamento premium que eu queria passar.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Diretor, Mendes Engenharia",
    content: "O investimento se pagou muito rápido. O site passa muita credibilidade para nossos clientes corporativos.",
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
