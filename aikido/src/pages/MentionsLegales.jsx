import React from "react";

export default function MentionsLegales() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-12 mt-12 pb-24">
      <div className="col-span-1 lg:col-span-12 relative mb-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
          MENTIONS LÉGALES
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-ink/20"></div>
          <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-4 h-[4px] bg-hanko"></div>
        </h2>
      </div>

      <div className="col-span-1 lg:col-span-8 lg:col-start-3 space-y-10 font-sans text-ink/80 leading-relaxed">

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">ÉDITEUR DU SITE</h3>
          <p>Nom : Julien Sicard</p>
          <p>Statut : Particulier</p>
          <p>Adresse : Saint-Ciers-sur-Gironde, France</p>
          <p>Email : <a href="mailto:srdjulien@gmail.com" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">srdjulien@gmail.com</a></p>
          <p>LinkedIn : <a href="https://www.linkedin.com/in/srdjulien" target="_blank" rel="noopener noreferrer" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">linkedin.com/in/srdjulien</a></p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">ACTIVITÉ</h3>
          <p>Ce site est un site vitrine personnel ayant pour objectif de présenter le club d'Aïkido Arts Martiaux Reignacais ainsi que des projets de développement web.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">HÉBERGEMENT</h3>
          <p>Ce site est hébergé par Amazon Web Services (AWS) via les services S3 et CloudFront.</p>
          <p>Amazon Web Services, Inc.</p>
          <p>410 Terry Avenue North, Seattle, WA 98109, États-Unis</p>
          <p><a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">aws.amazon.com</a></p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">PROPRIÉTÉ INTELLECTUELLE</h3>
          <p>Tout le contenu créé pour ce site (textes, code, logos, mise en page) appartient à Julien Sicard. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
          <p className="mt-3">La photographie de Morihei Ueshiba (O-Sensei) utilisée sur ce site provient d'un post Reddit et appartient à son auteur original. Elle est utilisée uniquement à titre illustratif et sans but commercial. Si vous êtes l'auteur de cette image et souhaitez qu'elle soit retirée, veuillez contacter : <a href="mailto:srdjulien@gmail.com" className="border-b border-ink/30 hover:border-hanko hover:text-hanko transition-colors">srdjulien@gmail.com</a>.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">RESPONSABILITÉ</h3>
          <p>L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des erreurs présentes sur le site, ni des dommages directs ou indirects pouvant en résulter.</p>
        </section>

        <section>
          <h3 className="font-serif font-bold text-xl tracking-widest mb-3 text-ink">DROIT APPLICABLE</h3>
          <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
        </section>

      </div>
    </main>
  );
}
