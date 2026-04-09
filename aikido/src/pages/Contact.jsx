import React from "react";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Nous Contacter — Dojo de Reignac"
        description="Contactez le club d'Aïkido Arts Martiaux Reignacais. Dojo situé au 24 Rue de la République, 33860 Reignac. Tél : 06 75 63 90 81."
        canonical="/contact"
      />
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 mt-12 pb-24">
      {/* Contact Header */}
      <div className="col-span-1 lg:col-span-12 relative mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
          NOUS CONTACTER
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-ink/20"></div>
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-4 h-[4px] bg-hanko"></div>
        </h2>
      </div>

      {/* Form Section */}
      <div className="lg:col-span-6 relative z-20">
        <div className="bg-washi/90 backdrop-blur-sm p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hanko-border border-l-2 border-ink/10 relative">
          {/* Maple leaf decoration */}
          <div className="absolute -top-10 -right-6 text-hanko/40 text-4xl rotate-[120deg] select-none opacity-60">
            🍁
          </div>

          <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">
            ENVOYER UN MESSAGE
          </h3>

          <form
            action="https://formspree.io/f/mkoqeglr" //
            method="POST"
            className="flex flex-col gap-8"
          >
            {/* Honeypot anti-bot */}
            <input type="text" name="_gotcha" style={{ display: "none" }} />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-ink/80 text-sm font-sans uppercase tracking-widest font-semibold"
              >
                Nom Complet
              </label>
              <input
                type="text"
                id="name"
                name="name" // <-- ajouté
                className="w-full bg-transparent border-b border-ink/40 py-2 focus:outline-none focus:border-hanko transition-colors text-ink"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-ink/80 text-sm font-sans uppercase tracking-widest font-semibold"
              >
                Adresse E-mail de contact
              </label>
              <input
                type="email"
                id="email"
                name="email" // <-- ajouté
                className="w-full bg-transparent border-b border-ink/40 py-2 focus:outline-none focus:border-hanko transition-colors text-ink"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label
                htmlFor="message"
                className="text-ink/80 text-sm font-sans uppercase tracking-widest font-semibold"
              >
                Votre Message
              </label>
              <textarea
                id="message"
                name="message" // <-- ajouté
                rows="4"
                className="w-full bg-transparent border-b border-ink/40 py-2 focus:outline-none focus:border-hanko transition-colors text-ink resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="self-start mt-4 bg-hanko text-washi px-8 py-3 text-sm font-bold tracking-[0.2em] flex items-center gap-4 transition-transform hover:-translate-y-1 hanko-border shadow-xl"
            >
              ENVOYER
              <div className="w-6 h-6 rounded-full border border-washi/50 flex items-center justify-center font-serif text-sm">
                信
              </div>
            </button>
          </form>
        </div>
      </div>

      {/* Info & Map Placeholder */}
      <div className="lg:col-span-5 lg:col-start-8 lg:-mt-12 relative z-10 flex flex-col justify-center">
        <h3 className="text-2xl font-serif font-bold tracking-widest mb-6">
          DOJO LOCAL
        </h3>

        <div className="space-y-6 text-lg font-sans text-ink/80">
          <div>
            <p className="font-bold text-ink">Adresse:</p>
            <p>24 Rue de la République,</p>
            <p>33860 Reignac</p>
          </div>
          <div>
            <p className="font-bold text-ink">Téléphone:</p>
            <p>06 75 63 90 81</p>
          </div>
          <div>
            <p className="font-bold text-ink">E-mail:</p>
            <p className="border-b border-ink/30 pb-1 inline-block hover:border-hanko transition-colors cursor-pointer">
              aikidoreignac@gmail.com
            </p>
          </div>
        </div>

        <div className="mt-12 w-full h-[300px] relative overflow-hidden torn-edge p-1 bg-white/20">
          {/* Placeholder for Map. Using a stylized image. */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1404.8502166955489!2d-0.5102320819789273!3d45.23362718502518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480036c7cfc0f285%3A0x89b20e901646ba09!2s24%20Rue%20de%20la%20R%C3%A9publique%2C%2033860%20Reignac!5e0!3m2!1sfr!2sfr!4v1773836860365!5m2!1sfr!2sfr"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Dojo Aïkido Régnacais"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 border border-ink/5 mix-blend-multiply pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none"></div>
        </div>
      </div>
    </main>
    </>
  );
}
