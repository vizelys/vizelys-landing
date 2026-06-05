export const metadata = {
  title: 'Mentions légales — Vizelys',
  description: 'Mentions légales du site vizelys.fr conformément à la loi n° 2004-575 du 21 juin 2004.',
}

export default function MentionsLegales() {
  return (
    <main style={{ paddingBlock: 'clamp(72px, 10vw, 128px)' }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <span className="eyebrow">Légal</span>
        <h1 style={{ marginTop: 18, marginBottom: 48 }}>Mentions légales</h1>

        <section className="legal-section">
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>vizelys.fr</strong> est édité par :
          </p>
          <ul>
            <li><strong>Dénomination sociale :</strong> Vizelys</li>
            <li><strong>Forme juridique :</strong> [À COMPLÉTER — ex. SAS, auto-entrepreneur…]</li>
            <li><strong>SIRET :</strong> [À COMPLÉTER]</li>
            <li><strong>Siège social :</strong> [À COMPLÉTER — adresse complète]</li>
            <li><strong>Directeur de la publication :</strong> [À COMPLÉTER — nom du gérant]</li>
            <li><strong>Contact :</strong> <a href="mailto:vizelys@proton.me">vizelys@proton.me</a></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. Hébergement</h2>
          <p>
            Le site est hébergé par :
          </p>
          <ul>
            <li><strong>Société :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site vizelys.fr (textes, images, graphismes, logotypes, icônes, sons, logiciels…) est la propriété exclusive de Vizelys, à l'exception des éléments issus de tiers dûment identifiés.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Vizelys.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Limitation de responsabilité</h2>
          <p>
            Vizelys s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Vizelys ne peut garantir l'exactitude, la complétude ou l'actualité des informations publiées.
          </p>
          <p>
            Les liens hypertextes mis en place vers d'autres sites ne sauraient engager la responsabilité de Vizelys quant à leur contenu.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Droit applicable</h2>
          <p>
            Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <p style={{ marginTop: 48, fontSize: 13, color: 'var(--text-subtle)' }}>
          Dernière mise à jour : juin 2026
        </p>
      </div>
    </main>
  )
}
