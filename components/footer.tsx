import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-lg shadow-cyan-900/20 group-hover:shadow-cyan-500/30 transition-all bg-slate-900">
              <Image 
                src="/images/logo.svg" 
                alt="Atlas Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">ATLAS</span>
              <div className="h-[2px] w-full bg-cyan-500 my-0.5 rounded-full"></div>
              <span className="text-[10px] text-slate-300 font-medium tracking-wider uppercase leading-none">
                Soluções Digitais
              </span>
            </div>
          </Link>

          <div className="flex gap-6 text-slate-400">
            <Link
              href="https://instagram.com/lucassantos.atlas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>

            <Link
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 border-t border-slate-900 pt-8">
          <div>
            <h3 className="text-white font-bold mb-4">Atlas Soluções Digitais</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas em posicionamento digital e SEO para negócios locais.
              Transformamos sua presença online em uma máquina de vendas.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="https://wa.me/5581960002151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  (81) 96000-2151
                </a>
              </li>
              <li>comercial@atlassolucoes.vercel.app</li>
              <li>Recife, PE</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#servicos" className="hover:text-cyan-400 transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/#processo" className="hover:text-cyan-400 transition-colors">
                  Como Funciona
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Atlas Soluções Digitais. Todos os direitos reservados.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-300">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-slate-300">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}