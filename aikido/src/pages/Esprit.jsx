import React from 'react';
import oSenseiImg from '../assets/Morihei_Ueshiba.webp';
import SEO from '../components/SEO';

export default function Esprit() {
  return (
    <>
      <SEO
        title="L'Esprit de l'Aïkido"
        description="Découvrez l'esprit de l'Aïkido selon Morihei Ueshiba O-Sensei : harmonie, non-violence et art de la paix. Le fondement philosophique de notre pratique à Reignac."
        canonical="/esprit"
      />
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 mt-12 pb-24">
      
      {/* Esprit Header */}
      <div className="col-span-1 lg:col-span-12 relative mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
          L'ESPRIT DE LA VOIE
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-ink/20"></div>
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-4 h-[4px] bg-hanko"></div>
        </h2>
      </div>

      <div className="lg:col-span-6 relative z-10">
        <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden torn-edge p-2 bg-white/20">
          <img 
            src={oSenseiImg} 
            alt="O-Sensei Concept" 
            className="w-full h-full object-cover grayscale contrast-125 saturate-0 opacity-90"
          />
          <div className="absolute inset-0 border border-ink/5 mix-blend-multiply pointer-events-none"></div>
        </div>
      </div>

      <div className="lg:col-span-6 lg:-ml-12 mt-8 lg:mt-24 relative z-20">
        <div className="bg-washi/90 backdrop-blur-sm p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hanko-border border-b-2 border-r border-ink/10">
          <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">L'ART DE LA PAIX</h3>
          <p className="text-ink/80 text-lg leading-relaxed mb-6 font-sans">
            "Le but de l'Aïkido n'est pas de vaincre l'adversaire, mais de vaincre notre propre agressivité."
            <br/><span className="text-sm italic mt-2 block opacity-70">— Morihei Ueshiba, Fondateur</span>
          </p>
          <p className="text-ink/80 leading-relaxed font-sans">
            Fondé au milieu du 20ème siècle au Japon par Morihei Ueshiba O-Sensei, l'Aïkido est un art martial singulier. 
            Il détourne l'énergie d'une attaque plutôt que de s'y opposer frontalement. 
            Il n'y a pas de compétition, seulement une recherche constante d'harmonie, de justesse de posture, 
            et de conscience de soi et de l'autre.
          </p>
        </div>
      </div>

      {/* Decorative Kanji background for text */}
      <div className="lg:col-span-12 relative flex justify-center mt-16 mb-8">
        <div className="absolute text-[200px] font-serif text-ink/5 leading-none select-none pointer-events-none flex whitespace-nowrap overflow-hidden">
          無抵抗
        </div>
      </div>

      <div className="lg:col-span-8 lg:col-start-3 text-center px-4 relative z-10">
        <p className="text-xl md:text-2xl font-serif italic text-ink/80 leading-relaxed">
          Dans notre dojo, nous enseignons que la véritable force réside dans la souplesse. 
          Que ce soit par le Taijutsu (techniques à mains nues) ou le Bukiwaza (armes), 
          chaque mouvement vise à unifier le cœur, l'esprit et le corps.
        </p>
      </div>

    </main>
    </>
  );
}
