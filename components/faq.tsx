"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo demora para o site ficar pronto?",
    answer: "Nosso prazo médio é de 15 a 20 dias úteis após o recebimento de todo o material (textos e imagens). Trabalhamos com cronogramas ágeis para colocar sua empresa no ar o quanto antes.",
  },
  {
    question: "Eu preciso pagar mensalidade?",
    answer: "Não cobramos mensalidade pelo desenvolvimento. O site é seu. Você terá apenas os custos anuais básicos de domínio (aprox. R$ 40/ano) e hospedagem, que orientamos como contratar diretamente em seu nome.",
  },
  {
    question: "O site vai aparecer no Google?",
    answer: "Sim. Desenvolvemos o site com as melhores práticas de SEO (Otimização para Motores de Busca), estrutura correta de títulos e velocidade, o que é fundamental para ser encontrado.",
  },
  {
    question: "Consigo alterar o conteúdo depois?",
    answer: "Sim! Entregamos o site com um painel administrativo intuitivo onde você poderá alterar textos e imagens facilmente, sem depender de programador.",
  },
  {
    question: "Vocês fazem o texto do site?",
    answer: "Temos um serviço opcional de copywriting. Caso prefira, podemos usar os textos que você enviar, mas sempre revisamos para garantir que estejam persuasivos.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-800">
              <AccordionTrigger className="text-slate-200 hover:text-cyan-400 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
