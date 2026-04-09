import React from "react";
import clubImg from "../assets/Salut.jpg";
import ianImg from "../assets/ian.png";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Club d'Aïkido à Reignac (33)"
        description="Club d'Aïkido Arts Martiaux Reignacais à Reignac en Gironde. Cours adultes et enfants, art martial non compétitif. Deux cours d'essai gratuits."
        canonical="/"
      />
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 mt-12 pb-24">
      {/* Hero Image & Headline */}
      <div className="relative col-span-1 lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 mb-16">
        <div className="lg:col-span-8 relative z-10">
          <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden torn-edge p-2 bg-white/20">
            <img
              src={clubImg}
              alt="Aikido Practice"
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-1000 saturate-0"
            />
            {/* Simulated brush border / shadow */}
            <div className="absolute inset-0 border border-ink/5 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:-ml-24 xl:-ml-32 mt-8 lg:mt-24 relative z-20 flex flex-col items-start lg:col-start-7 text-center lg:text-left">
          <div className="bg-washi/90 backdrop-blur-sm p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hanko-border border-b-2 border-r border-ink/10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] mb-6 tracking-tight">
              Aikido Arts Martiaux Reignacais
              <br />
              <br /> L'ART DE LA PAIX AU CŒUR DE NOTRE VILLE
            </h2>

            <button className="group mt-4 bg-hanko text-washi px-8 py-4 text-sm font-bold tracking-[0.2em] flex items-center gap-4 transition-transform hover:-translate-y-1 hanko-border shadow-xl">
              <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-serif rotate-12">
                道
              </div>
              DECOUVREZ DEUX COURS D'ESSAI GRATUITS
              <span className="block text-[10px] uppercase font-normal absolute -bottom-6 left-1/2 -translate-x-1/2 text-ink/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                (Débutants bienvenus)
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Essence & Concept */}
      <div className="lg:col-span-5 relative">
        {/* Maple leaf decoration */}
        <div className="absolute -top-10 -left-6 text-hanko/40 text-4xl rotate-45 select-none opacity-60">
          🍁
        </div>

        <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">
          L'ESSENCE DE L'AIKIDO
        </h3>
        <p className="text-ink/80 text-lg leading-relaxed mb-8">
          L'essence de l'Aïkido n'est pas de vaincre l'autre, mais de
          s'harmoniser avec l'univers. À travers une pratique martiale non
          compétitive, nous cultivons le corps et l'esprit.
        </p>

        <div className="flex gap-6 items-center">
          <div className="w-48 h-32 overflow-hidden torn-edge grayscale contrast-125 opacity-90"></div>
          <div className="font-serif">
            <p className="text-2xl font-bold tracking-widest text-ink">
              HARMONIE
            </p>
            <p className="text-xl italic text-ink/60">— NON-VIOLENCE</p>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="lg:col-span-4 lg:col-start-7 relative mt-12 lg:mt-0">
        <div className="absolute -top-12 -right-8 text-hanko/30 text-5xl -rotate-12 select-none">
          🍁
        </div>

        <div className="border border-ink/80 p-6 bg-washi shadow-[4px_4px_0px_#1a1a1a] relative z-10 transition-transform hover:-translate-y-1 duration-300">
          <h3 className="text-xl font-serif font-bold tracking-widest mb-6 text-center border-b-2 border-ink pb-4">
            HORAIRES DES ENTRAÎNEMENTS
          </h3>

          <table className="w-full text-sm font-sans">
            <tbody>
              <tr className="border-b border-slate-300">
                <td className="py-3 font-semibold uppercase tracking-wider">
                  Mardi
                </td>
                <td className="py-3 text-right tabular-nums">
                  19h45 — 21h15 — Cours adultes
                </td>
              </tr>

              <tr className="border-b border-slate-300">
                <td className="py-3 font-semibold uppercase tracking-wider">
                  Jeudi
                </td>
                <td className="py-3 text-right tabular-nums">
                  19h00 — 20h30 — Cours adultes
                </td>
              </tr>

              {/* Vendredi ligne 1 */}
              <tr className="border-b border-slate-300">
                <td className="py-3 font-semibold uppercase tracking-wider">
                  Vendredi
                </td>
                <td className="py-3 text-right tabular-nums">
                  18h00 — 19h00 — Cours enfants
                </td>
              </tr>

              {/* Vendredi ligne 2 */}
              <tr className="border-b border-slate-300">
                <td className="py-3"></td>
                <td className="py-3 text-right tabular-nums">
                  19h00 — 21h00 — Cours adultes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sensei & Dojo */}
      <div className="lg:col-span-12 lg:col-start-2 lg:col-end-11 mt-24">
        <h3 className="text-2xl font-serif font-bold tracking-widest mb-8 text-center">
          NOTRE SENSEI
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/20 p-8 border border-ink/10 hanko-border backdrop-blur-sm relative">
          <div className="relative">
            <div className="absolute inset-0 bg-ink/5 -rotate-3 rounded-lg -z-10 w-full h-full"></div>
            <img
              src={ianImg}
              alt="Sensei"
              className="w-full h-80 object-cover grayscale contrast-150 hanko-border shadow-xl transform rotate-1"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-serif text-3xl font-bold mb-4">3ème Dan UFA</p>
            <p className="text-ink/80 leading-relaxed mb-6 font-sans">
              Pratiquant depuis plus de 35 ans, notre sensei transmet la
              discipline dans le plus strict respect de la tradition transmise
              par Morihei Ueshiba O-Sensei. Le dojo est un espace de recherche,
              de paix et de respect mutuel.
            </p>
            <a
              href="/contact"
              className="inline-block border-b-2 border-ink pb-1 font-bold tracking-widest uppercase hover:text-hanko hover:border-hanko transition-colors duration-200 self-start"
            >
              Venir nous rencontrer
            </a>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
