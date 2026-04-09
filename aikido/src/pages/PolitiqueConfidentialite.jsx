import React from "react";

export default function PolitiqueConfidentialite() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 mt-12 pb-24">
      <div className="col-span-1 lg:col-span-12 relative mb-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
          POLITIQUE DE CONFIDENTIALITÉ
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-ink/20"></div>
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-4 h-[4px] bg-hanko"></div>
        </h2>
      </div>

      <div className="col-span-1 lg:col-span-8 lg:col-start-3 space-y-10 font-sans text-ink/80 leading-relaxed">

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">RESPONSABLE DU TRAITEMENT</h3>
          <p>Julien Sicard — Saint-Ciers-sur-Gironde, France</p>
          <p>Email : <a href="mailto:aikidoreignac@gmail.com" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">aikidoreignac@gmail.com</a></p>
          <p>LinkedIn : <a href="https://www.linkedin.com/in/srdjulien" target="_blank" rel="noopener noreferrer" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">linkedin.com/in/srdjulien</a></p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">DONNÉES COLLECTÉES</h3>
          <p>Ce site collecte uniquement les données que vous saisissez volontairement dans le formulaire de contact :</p>
          <ul className="list-none mt-3 space-y-2">
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Nom complet</li>
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Adresse e-mail</li>
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Message</li>
          </ul>
          <p className="mt-3">Aucune autre donnée personnelle n'est collectée automatiquement (pas de tracking, pas d'analytics).</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">FINALITÉ DU TRAITEMENT</h3>
          <p>Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à vos demandes d'information concernant le club d'Aïkido Arts Martiaux Reignacais.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">DURÉE DE CONSERVATION</h3>
          <p>Vos données sont conservées uniquement le temps nécessaire pour traiter et répondre à votre demande. Elles ne sont pas archivées au-delà de cette finalité.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">VOS DROITS (RGPD)</h3>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
          <ul className="list-none mt-3 space-y-2">
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Droit d'accès à vos données</li>
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Droit de rectification</li>
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Droit à l'effacement (droit à l'oubli)</li>
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Droit à la limitation du traitement</li>
            <li className="flex items-center gap-3"><span className="text-hanko">●</span> Droit d'opposition</li>
          </ul>
          <p className="mt-3">Pour exercer ces droits, contactez-nous à : <a href="mailto:aikidoreignac@gmail.com" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">aikidoreignac@gmail.com</a></p>
          <p className="mt-3">Vous disposez également du droit d'introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">CNIL</a>.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">COOKIES</h3>
          <p>Ce site n'utilise aucun cookie de traçage, de publicité ou d'analyse. Aucune donnée de navigation n'est collectée à votre insu.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">TRANSMISSION DES DONNÉES</h3>
          <p>Les messages envoyés via le formulaire de contact sont transmis par le service tiers <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">Formspree</a>. Vos données ne sont pas revendues ni partagées avec des tiers à des fins commerciales.</p>
        </section>

        <p className="text-sm text-ink/50 pt-4 border-t border-ink/10">Dernière mise à jour : mars 2026</p>

      </div>
    </main>
  );
}
