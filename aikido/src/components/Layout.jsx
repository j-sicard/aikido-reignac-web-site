import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Linkedin, Facebook } from "lucide-react";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans selection:bg-hanko selection:text-washi flex flex-col">
      {/* Decorative Sumi-e absolute blobs */}
      <div className="absolute top-20 -left-64 w-[800px] h-[800px] bg-slate-200/40 rounded-full blur-[120px] -z-10 mix-blend-multiply opacity-50"></div>
      <div className="absolute top-[40%] right-0 w-[400px] h-[600px] bg-orange-100/30 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

      {/* Vertical Edge Label (Right) */}
      <div className="hidden lg:flex fixed right-4 top-32 writing-vertical-rl flex-col items-center gap-6 z-50 mix-blend-darken">
        <div className="border border-ink p-2 px-3 pb-8 rounded-md bg-washi/80 backdrop-blur-[2px]">
          <span className="font-serif text-3xl font-bold tracking-[0.2em] mb-4">
            合気道
          </span>
          <span className="font-sans text-xs tracking-[0.3em] text-ink/70 mt-4 leading-relaxed uppercase">
            Tradition Dojo Local
          </span>
        </div>
        <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center bg-washi/80 backdrop-blur-[2px]">
          <span className="mt-1 text-sm font-serif">和</span>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative flex-grow flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center py-6 border-b border-ink/10">
          <NavLink to="/" className="flex items-center gap-4 group">
            <div className="w-16 h-16 rounded-full border-4 border-[#8B0000] flex items-center justify-center text-[#8B0000] font-serif font-bold text-2xl rotate-[-5deg] relative group-hover:rotate-0 transition-transform duration-500">
              <div className="absolute -inset-1 rounded-full border border-[#8B0000]/30 rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
              合気
            </div>
            <div>
              <h1 className="text-2xl font-bold font-serif tracking-widest text-ink group-hover:text-hanko transition-colors">
                Aikido Arts Martiaux
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-ink/70 font-semibold">
                Reignac - VOIE DE L'HARMONIE
              </p>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest text-ink/80">
            <NavLink
              to="/esprit"
              className={({ isActive }) =>
                isActive
                  ? "text-hanko border-b-2 border-hanko pb-1"
                  : "hover:text-ink transition-colors pb-1 border-b-2 border-transparent"
              }
            >
              L'ESPRIT
            </NavLink>
            <NavLink
              to="/pratique"
              className={({ isActive }) =>
                isActive
                  ? "text-hanko border-b-2 border-hanko pb-1"
                  : "hover:text-ink transition-colors pb-1 border-b-2 border-transparent"
              }
            >
              PRATIQUE
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-hanko border-b-2 border-hanko pb-1"
                  : "hover:text-ink transition-colors pb-1 border-b-2 border-transparent"
              }
            >
              CONTACT
            </NavLink>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={28} />
          </button>
          {menuOpen && (
            <div className="flex flex-col gap-4 mt-4 md:hidden">
              <NavLink to="/esprit" onClick={() => setMenuOpen(false)}>
                L'ESPRIT
              </NavLink>
              <NavLink to="/pratique" onClick={() => setMenuOpen(false)}>
                PRATIQUE
              </NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT
              </NavLink>
            </div>
          )}
        </nav>

        {/* Dynamic Page Content */}
        <div className="flex-grow">{children}</div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/20 py-16 text-center mt-auto bg-washi relative overflow-hidden shrink-0 w-full">
        <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-[600px] h-[300px] bg-slate-200/50 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-30"></div>

        {/* Identité */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-ink bg-transparent flex items-center justify-center opacity-70">
            <span className="font-serif text-2xl">礼</span>
          </div>
          <p className="font-serif text-xl tracking-widest font-bold mb-3">
            Aikido Arts Martiaux Reignacais
          </p>
          <p className="text-sm text-ink/60 uppercase tracking-widest">
            Le Respect commence et se termine par un salut.
          </p>
        </div>

        {/* Séparateur */}
        <div className="w-16 h-[1px] bg-ink/20 mx-auto mb-8" />

        {/* Réseaux sociaux */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <a href="https://www.linkedin.com/in/srdjulien" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-hanko transition-colors duration-300 p-2">
            <Linkedin size={20} />
          </a>
          <a href="https://www.facebook.com/artsmartiauxreignacais/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-hanko transition-colors duration-300 p-2">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/aikido_reignac" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-hanko transition-colors duration-300 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>

        {/* Séparateur */}
        <div className="w-16 h-[1px] bg-ink/20 mx-auto mb-8" />

        {/* Liens légaux */}
        <div className="flex items-center justify-center gap-3 md:gap-6 text-[11px] text-ink/40 uppercase tracking-widest flex-wrap px-6">
          <NavLink to="/mentions-legales" className="hover:text-hanko transition-colors duration-300">
            Mentions légales
          </NavLink>
          <span className="text-ink/20">·</span>
          <NavLink to="/politique-confidentialite" className="hover:text-hanko transition-colors duration-300">
            Politique de confidentialité
          </NavLink>
        </div>
      </footer>
    </div>
  );
}
