"use client";

import { Layout, Search, Smartphone, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Layout,
    title: "Design Estratégico",
    description: "Layouts pensados para conversão. Guiamos o visitante até o botão de WhatsApp com uma navegação intuitiva e persuasiva.",
  },
  {
    icon: Search,
    title: "SEO & Google Maps",
    description: "Otimização completa para que sua empresa seja encontrada por quem já está procurando pelo que você vende.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Experiência perfeita em celulares. Mais de 80% dos seus clientes vão acessar seu site pelo smartphone.",
  },
  {
    icon: BarChart3,
    title: "Foco em Performance",
    description: "Sites ultrarrápidos. O Google prioriza sites que carregam rápido, e seus clientes não têm paciência para esperar.",
  },
];

export function Solution() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-xs font-medium mb-6">
              Solução Atlas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Não entregamos apenas código.<br />
              <span className="text-cyan-400">Entregamos resultados.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Nossa metodologia une design premium com estratégias de vendas. 
              Cada elemento do seu site é posicionado intencionalmente para gerar confiança e autoridade.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {solutions.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-900 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-3xl rounded-full opacity-30" />
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono">atlas-analytics.tsx</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Visitantes</span>
                    <span className="text-white font-mono">12.450</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-cyan-500 h-2 rounded-full w-[75%]" />
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-slate-400 text-sm">Taxa de Conversão</span>
                    <span className="text-green-400 font-mono font-bold">+4.8%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[60%]" />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-slate-400 text-sm">Leads Gerados</span>
                    <span className="text-white font-mono">342</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[85%]" />
                  </div>
                </div>

                <div className="mt-8 p-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg">
                  <p className="text-cyan-200 text-sm text-center">
                    &quot;O site se pagou no primeiro mês com os novos clientes que chegaram.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
