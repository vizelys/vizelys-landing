export const metadata = {
  title: 'Politique de confidentialité — Vizelys',
  description: 'Politique de confidentialité et de traitement des données personnelles de Vizelys, conforme au RGPD et aux recommandations de la CNIL.',
}

export default function PolitiqueConfidentialite() {
  return (
    <main style={{ paddingBlock: 'clamp(72px, 10vw, 128px)' }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <span className="eyebrow">Légal</span>
        <h1 style={{ marginTop: 18, marginBottom: 48 }}>Politique de confidentialité</h1>

        <section className="legal-section">
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées sur le site <strong>vizelys.fr</strong> est :
          </p>
          <ul>
            <li><strong>Vizelys</strong></li>
            <li><strong>Adresse :</strong> [À COMPLÉTER]</li>
            <li><strong>Contact :</strong> <a href="mailto:vizelys@proton.me">vizelys@proton.me</a></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>2. Données collectées</h2>
          <p>Dans le cadre de l'utilisation du formulaire de contact, nous collectons les données suivantes :</p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone (facultatif)</li>
            <li>Secteur d'activité</li>
            <li>Message libre</li>
          </ul>
          <p>
            Aucune donnée sensible au sens de l'article 9 du RGPD n'est collectée.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Finalités du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul>
            <li>Répondre à vos demandes de contact ou de devis</li>
            <li>Planifier un premier échange téléphonique ou par visioconférence</li>
            <li>Vous transmettre notre proposition commerciale si vous en faites la demande</li>
          </ul>
          <p>
            Ces données ne sont pas utilisées à des fins de prospection commerciale sans votre consentement explicite.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Base légale</h2>
          <p>
            Le traitement est fondé sur l'<strong>intérêt légitime</strong> de Vizelys (article 6.1.f du RGPD) pour répondre aux demandes entrantes, et sur l'<strong>exécution de mesures précontractuelles</strong> prises à votre demande (article 6.1.b).
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Destinataires des données</h2>
          <p>
            Vos données sont accessibles uniquement aux membres de l'équipe Vizelys impliqués dans le traitement de votre demande. Elles peuvent être transmises aux sous-traitants suivants, dans le strict cadre de leurs fonctions :
          </p>
          <ul>
            <li><strong>Notion Labs Inc.</strong> — outil de gestion des leads (hébergé aux États-Unis, couvert par les clauses contractuelles types de la Commission européenne)</li>
            <li><strong>Vercel Inc.</strong> — hébergement du site et de l'API de traitement du formulaire</li>
          </ul>
          <p>Vos données ne sont jamais vendues à des tiers.</p>
        </section>

        <section className="legal-section">
          <h2>6. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, conformément aux recommandations de la CNIL pour les données de prospection commerciale. Passé ce délai, elles sont supprimées ou anonymisées.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Vos droits</h2>
          <p>Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
            <li><strong>Droit à la limitation</strong> — restreindre le traitement</li>
            <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> — vous opposer au traitement fondé sur l'intérêt légitime</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à <a href="mailto:vizelys@proton.me">vizelys@proton.me</a>. Nous répondrons dans un délai d'un mois.
          </p>
          <p>
            En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">cnil.fr/fr/plaintes</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Cookies</h2>
          <p>
            Le site vizelys.fr n'utilise <strong>aucun cookie de traçage ou publicitaire</strong>. Seul un cookie technique est déposé localement (<code>vizelys-theme</code>) pour mémoriser votre préférence de thème clair/sombre. Ce cookie ne collecte aucune donnée personnelle et ne nécessite pas de consentement au sens de la directive ePrivacy.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Sécurité</h2>
          <p>
            Vizelys met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération : connexions chiffrées (HTTPS/TLS), accès restreint aux données, hébergement chez des prestataires certifiés.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Modifications</h2>
          <p>
            Cette politique peut être mise à jour à tout moment. La date de dernière mise à jour est indiquée ci-dessous. Nous vous encourageons à la consulter régulièrement.
          </p>
        </section>

        <p style={{ marginTop: 48, fontSize: 13, color: 'var(--text-subtle)' }}>
          Dernière mise à jour : juin 2026
        </p>
      </div>
    </main>
  )
}
