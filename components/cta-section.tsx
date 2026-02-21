"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-cyan-950/20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Pronto para escalar seu negócio?
        </h2>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Não deixe mais dinheiro na mesa. Tenha um site profissional que trabalha 24 horas por dia para trazer novos clientes.
        </p>
        
        <Button size="lg" variant="glow" className="h-auto py-4 px-8 text-lg whitespace-normal text-center" asChild>
          <Link href="https://wa.me/5581960002151" target="_blank">
            <MessageCircle className="mr-2 w-5 h-5 shrink-0" />
            Solicitar Orçamento no WhatsApp
          </Link>
        </Button>
        
        <p className="mt-6 text-sm text-slate-500">
          Resposta rápida • Sem compromisso
        </p>
      </div>
    </section>
  );
}
