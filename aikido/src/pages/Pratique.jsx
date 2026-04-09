import React, { useState } from "react";
import mainNuImg from "../assets/main_nu.jpg";
import Jo from "../assets/Jo_josette_bis.jpg";
import Bokken from "../assets/Bokken_ben.jpg";
import Tanto from "../assets/tanto.jpg";
import SEO from "../components/SEO";

export default function Pratique() {
  // Tableau statique d'objets
  const images = [
    { id: 1, src: Bokken, alt: "Blade Bokken", position: "center 15%" },
    { id: 2, src: Jo, alt: "Blade Jo", position: "center 15%" },
    { id: 3, src: Tanto, alt: "blade tanto", position: "center center" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];
  const handleclickBoken = () => setCurrentIndex(0);
  const handleclickJo = () => setCurrentIndex(1);
  const handleclickTanto = () => setCurrentIndex(2);

  return (
    <>
      <SEO
        title="La Pratique — Taijutsu et Bukiwaza"
        description="Découvrez la pratique de l'Aïkido : Taijutsu (techniques à mains nues) et Bukiwaza (travail des armes : Bokken, Jo, Tanto). Club Aïkido Reignac (33)."
        canonical="/pratique"
      />
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 mt-12 pb-24">
      {/* Pratique Header */}
      <div className="col-span-1 lg:col-span-12 relative mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
          LA PRATIQUE
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-ink/20"></div>
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-4 h-[4px] bg-hanko"></div>
        </h2>
      </div>

      {/* Taijutsu Section */}
      <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12 items-center mb-16">
        <div className="lg:col-span-6 order-2 lg:order-1 relative z-20">
          <div className="bg-washi/90 backdrop-blur-sm p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hanko-border border-b-2 border-r border-ink/10">
            <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">
              TAIJUTSU
            </h3>
            <p className="text-xl italic text-ink/60 font-serif mb-4">
              — Pratique à mains nues
            </p>
            <p className="text-ink/80 text-lg leading-relaxed mb-6 font-sans">
              La base de l'Aïkido repose sur l'étude des mouvements du corps
              face à une ou plusieurs attaques. Les techniques comprennent des
              projections (Nage-waza) et des immobilisations (Katamé-waza).
            </p>
            <ul className="list-none space-y-3 font-sans text-ink/80 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-hanko font-serif">●</span> Étude des
                saisies et des frappes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-hanko font-serif">●</span> Travail de la
                posture (Shisei) et de la distance (Ma-ai)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-hanko font-serif">●</span> Chutes et
                roulades (Ukemi) pour une pratique sécurisée
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 relative z-10 lg:ml-[-10%]">
          <div className="w-full h-[350px] relative overflow-hidden torn-edge p-2 bg-white/20">
            <img
              src={mainNuImg}
              alt="Taijutsu"
              className="w-full h-full object-cover grayscale contrast-125 saturate-0 opacity-90"
            />
            <div className="absolute inset-0 border border-ink/5 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Bukiwaza Section */}
      <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-12 items-center">
        <div className="lg:col-span-6 relative z-10 lg:mr-[-10%]">
          <div className="w-full h-[350px] relative overflow-hidden torn-edge p-2 bg-white/20">
            <img
              src={currentImage.src}
              alt="Armes en Bois"
              className="w-full h-full object-cover grayscale contrast-125 saturate-0 opacity-90"
              style={{ objectPosition: currentImage.position }}
            />
            <div className="absolute inset-0 border border-ink/5 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>

        <div className="lg:col-span-6 relative z-20">
          <div className="bg-washi/90 backdrop-blur-sm p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hanko-border border-b-2 border-l border-ink/10">
            <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">
              BUKIWAZA
            </h3>
            <p className="text-xl italic text-ink/60 font-serif mb-4">
              — Travail des Armes
            </p>
            <p className="text-ink/80 text-lg leading-relaxed mb-6 font-sans">
              La pratique des armes en bois prolonge le mouvement et affine la
              précision, le timing et la compréhension des angles de coupe. Elle
              est indissociable du travail à mains nues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <button
                className="border border-ink/20 p-4 text-center hanko-border hover:border-hanko transition-colors"
                onClick={handleclickBoken}
              >
                <h4 className="font-serif font-bold text-lg mb-2">Bokken</h4>
                <p className="text-xs text-ink/70">Sabre en bois</p>
              </button>
              <button
                className="border border-ink/20 p-4 text-center hanko-border hover:border-hanko transition-colors"
                onClick={handleclickJo}
              >
                <h4 className="font-serif font-bold text-lg mb-2">Jo</h4>
                <p className="text-xs text-ink/70">Bâton (1,28m)</p>
              </button>
              <button
                className="border border-ink/20 p-4 text-center hanko-border hover:border-hanko transition-colors"
                onClick={handleclickTanto}
              >
                <h4 className="font-serif font-bold text-lg mb-2">Tanto</h4>
                <p className="text-xs text-ink/70">Poignard en bois</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
