"use client";

import { AlertTriangle, TrendingDown, EyeOff, Users } from "lucide-react";
import { motion } from "framer-motion";

const pains = [
  {
    icon: EyeOff,
    title: "Invisível no Google",
    description: "Seus clientes procuram pelo seu serviço, mas encontram apenas seus concorrentes na primeira página.",
  },
  {
    icon: TrendingDown,
    title: "Dependência de Indicação",
    description: "Seu faturamento oscila porque você não tem um canal previsível de aquisição de novos clientes.",
  },
  {
    icon: AlertTriangle,
    title: "Site Amador",
    description: "Seu site atual não passa credibilidade, é lento e afasta clientes qualificados que buscam profissionalismo.",
  },
  {
    icon: Users,
    title: "Concorrência Crescendo",
    description: "Enquanto você adia a decisão, seus concorrentes estão investindo no digital e dominando o mercado local.",
  },
];

export function PainPoints() {
  return (
    <section className="py-20 bg-slate-900/50 border-y border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sua empresa está perdendo oportunidades?
          </h2>
          <p className="text-slate-400">
            O mercado mudou. Ter apenas um &quot;cartão de visita digital&quot; não é mais suficiente para garantir o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-950 border border-slate-800 p-6 rounded-xl hover:border-red-900/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-950/30 transition-colors">
                <pain.icon className="w-6 h-6 text-slate-400 group-hover:text-red-400 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
