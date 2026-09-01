/* Homepage v3 — aide à la décision */
export const DC = {
  nav: [
    { label: "Le constat", href: "#constat" },
    { label: "Méthode", href: "#methode" },
    { label: "Offres", href: "#offres" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Cadrer votre situation",

  hero: {
    badge: "Data, IA & logiciels métier · Pour PME et ETI",
    lead: "On ne construit pas de dashboards de plus. On résout le problème de données qui bloque la décision.",
    trust: ["Diagnostic à 2 900 € HT", "Pilote livré en 4 à 6 semaines", "Équipe basée en France"],
    flowIn: ["ERP", "Excel", "Saisies manuelles", "Outil terrain"],
    flowNode: "Consolidation & contrôle",
    flowOut: "Un indicateur · une source · une décision",
  },

  constat: {
    sub: "Une organisation ne souffre pas d'un manque de données. Elle souffre de ne pas pouvoir s'y fier assez vite.",
    items: [
      { t: "Vos chiffres se discutent au lieu de se décider", d: "Chaque réunion commence par un désaccord sur les données. Le temps passe à recouper des versions au lieu d'arbitrer." },
      { t: "La donnée existe, elle n'est pas exploitable", d: "Dispersée entre un ERP, des exports Excel et des saisies manuelles, elle demande un travail de reconstitution à chaque question." },
      { t: "Entre la question et la réponse, il se passe trois jours", d: "Le temps que quelqu'un consolide, la décision a déjà été prise autrement, ou pas prise du tout." },
    ],
  },

  steps: [
    { n: "01", t: "Comprendre", d: "On part du processus réel et de la décision qui pose problème, pas d'une technologie." },
    { n: "02", t: "Cadrer", d: "Périmètre, données disponibles, indicateurs de succès, coût de construction. Écrit avant de développer." },
    { n: "03", t: "Construire", d: "Pilote ou solution, avec des critères d'acceptation définis en amont." },
    { n: "04", t: "Fiabiliser & déployer", d: "Tests, documentation, mise en production, suivi des indicateurs." },
  ],

  services: [
    { t: "Décision & pilotage", d: "Indicateurs fiables, reporting, consolidation, arbitrage.", tag: "Des chiffres opposables" },
    { t: "Data & IA", d: "Qualité des données, pipelines, automatisation, machine learning, LLM et recherche documentaire.", tag: "De la donnée à l'usage" },
    { t: "Software & automatisation", d: "Applications métier, APIs, intégrations ERP/CRM, outils internes.", tag: "Moins de saisie manuelle" },
    { t: "Delivery & qualité", d: "Cadrage, architecture, tests, documentation, mise en production.", tag: "Un projet maîtrisable" },
  ],

  beforeAfter: {
    before: ["4 sources pour un même sujet.", "3 versions du même chiffre.", "3 jours entre question et réponse.", "Arbitrage à l'intuition."],
    after: ["Une source de vérité.", "Un indicateur daté et sourcé.", "Mise à jour automatique.", "Décision documentée."],
    cells: [
      { v: "marge = 12,4 %", s: "export_v2_FINAL.xlsx · 12/06" },
      { v: "marge : 13,1 %", s: "ERP · module compta" },
      { v: "Marge 11,8 %", s: "saisie manuelle · 28/05" },
      { v: "#REF!", s: "consolidation_aout.xlsx" },
    ],
    kpi: { label: "Marge brute · Juillet 2026", value: "12,6 %", meta: "Source : ERP consolidé · contrôles passés · mis à jour il y a 2 h" },
  },

  niches: [
    { t: "Industrie & opérations", d: "Production, qualité, maintenance : des chiffres d'atelier fiables." },
    { t: "Logistique & transport", d: "Flux, tournées, taux de service, coûts." },
    { t: "Services B2B", d: "Rentabilité par mission, staffing, facturation." },
    { t: "Directions financières", d: "Consolidation, reporting, chiffres défendables." },
    { t: "DSI & équipes data", d: "En besoin de capacité de delivery : cadrage, renfort, industrialisation." },
    { t: "ETI multi-sites", d: "Un même indicateur, calculé pareil sur chaque site." },
  ],
  nichesQualif: "PME et ETI de 20 à 500 collaborateurs, avec des processus récurrents et un problème chiffrable.",

  stats: [
    { v: "1,5 M", l: "lignes × 90 variables structurées et validées — jeu de données médical" },
    { v: "57", l: "règles métier adaptées" },
    { v: "Millions", l: "de données logistiques traitées" },
    { v: "−80 %", l: "de temps de traitement des factures" },
    { v: "8", l: "applications Data/IA développées" },
  ],
  statsNote: "Réalisations issues de l'expérience individuelle des membres de l'équipe, avant la constitution de Vizelys.",

  offers: {
    discover: {
      name: "Discover — Diagnostic & Roadmap",
      price: "2 900 € HT",
      sub: "Trois à quatre jours pour comprendre où votre organisation perd du temps ou de la fiabilité.",
      list: ["Cadrage avec la direction", "2 à 5 entretiens ciblés", "Analyse du processus et des données disponibles", "3 à 5 opportunités Data / IA / automatisation chiffrées", "Première estimation de ROI", "Roadmap 90 jours", "Restitution de direction"],
      deal: "50 % déduits si un projet suit dans les 30 jours — parce qu'on mise autant que vous sur la suite.",
    },
    prove: {
      name: "Prove — Pilote Data / IA / Automatisation",
      price: "À partir de 12 900 € HT",
      sub: "Valider un cas d'usage sur vos données et vos processus réels avant d'investir dans une solution complète. Périmètre cadré, indicateurs de succès définis en amont, limites mesurées.",
      verdict: "Le pilote se conclut par une recommandation explicite :",
    },
    next: "Si le pilote confirme la valeur, nous construisons la solution (Build) et nous l'accompagnons en production (Evolve).",
  },

  faq: [
    { q: "Combien de temps prend un Discover ?", a: "Deux à trois semaines entre le lancement et la restitution, pour environ trois à quatre jours de travail cumulés." },
    { q: "Comment mesure-t-on le ROI ?", a: "On définit l'indicateur avant de commencer. S'il n'est pas mesurable, on ne lance pas le projet." },
    { q: "À qui appartient ce que vous construisez ?", a: "À vous, entièrement : code, données et documentation." },
    { q: "Et si le pilote ne fonctionne pas ?", a: "C'est un résultat. Un pilote se termine par GO, ADJUST ou STOP. Un STOP argumenté vous coûte beaucoup moins cher qu'un projet lancé à l'aveugle." },
    { q: "RGPD, AI Act : vous gérez ?", a: "Nous intégrons les exigences techniques et la cartographie des risques dans les projets. Nous ne sommes pas un cabinet juridique et nous ne promettons pas de conformité réglementaire." },
    { q: "Ce que nous ne faisons pas", a: "Site vitrine grand public, régie au forfait horaire, déploiement d'un outil sans cas d'usage identifié." },
  ],

  contactSteps: [
    { t: "Un premier échange", d: "Votre situation, vos processus, la décision qui pose problème." },
    { t: "Une proposition de cadrage", d: "Périmètre du diagnostic, personnes à rencontrer, calendrier." },
    { t: "Le Discover", d: "Entretiens, analyse, restitution et roadmap." },
  ],

  footer: {
    tagline: "Conseil et ingénierie Data, IA et logiciels métier pour les PME et ETI. Comprendre avant de construire, construire pour durer.",
    offers: ["Discover", "Prove", "Build", "Evolve"],
    email: "contact@vizelys.fr",
    copyright: "© 2026 Vizelys — Conseil & ingénierie Data, IA & logiciels métier.",
  },
}

/* Présence en ligne page — old artisan content */
export const VIZ = {
  nav: [
    { label: "Le constat", href: "#constat" },
    { label: "Notre approche", href: "#approche" },
    { label: "Services", href: "#services" },
    { label: "Pour qui", href: "#pour-qui" },
    { label: "FAQ", href: "#faq" },
  ],

  frictions: [
    { t: "Vos clients vous cherchent avant d'appeler", d: "Avis, photos, présentation… Aujourd'hui, on vérifie une entreprise en ligne avant de la contacter. Si l'information manque, le doute s'installe." },
    { t: "Votre savoir-faire ne se voit pas assez", d: "Vous faites un travail sérieux, mais votre site (ou son absence) ne le montre pas. Vos preuves restent invisibles." },
    { t: "Le contact est plus compliqué qu'il ne devrait", d: "Numéro difficile à trouver, formulaire qui décourage, page lente sur mobile : autant d'occasions manquées." },
  ],

  steps: [
    { n: "01", t: "Comprendre", d: "On part de votre métier, vos clients et ce qui vous distingue vraiment. Pas de modèle générique." },
    { n: "02", t: "Clarifier", d: "Un message simple et une structure lisible : on comprend qui vous êtes en quelques secondes." },
    { n: "03", t: "Mettre en valeur", d: "Avis, réalisations, certifications, photos : vos preuves deviennent des arguments visibles." },
    { n: "04", t: "Faciliter le contact", d: "Appel, devis, rendez-vous : on rend l'action évidente, sur ordinateur comme sur mobile." },
  ],

  services: [
    { ic: "window", t: "Refonte de site web", d: "Un site clair, rapide et soigné, qui inspire confiance dès la première seconde — pensé d'abord pour le mobile.", tag: "Une présence plus claire" },
    { ic: "search", t: "Référencement local (SEO)", d: "Être trouvé quand on cherche votre métier dans votre secteur, sur Google et sur la carte.", tag: "Être trouvé au bon moment" },
    { ic: "badge", t: "Mise en valeur des preuves", d: "Avis clients, réalisations et certifications mis en avant pour rassurer et appuyer votre sérieux.", tag: "Des preuves mieux valorisées" },
    { ic: "target", t: "Parcours de contact", d: "Boutons d'appel, devis et prise de rendez-vous placés là où ils transforment vraiment.", tag: "Un contact plus simple" },
  ],

  niches: [
    { t: "Artisans & bâtiment", d: "Plombiers, électriciens, maçons, rénovation, paysagistes." },
    { t: "Services locaux", d: "Dépannage, entretien, nettoyage, services à domicile." },
    { t: "Commerces spécialisés", d: "Boutiques, instituts, ateliers et enseignes de proximité." },
    { t: "Cabinets & indépendants", d: "Professions libérales, conseils, thérapeutes, experts." },
    { t: "TPE / PME locales", d: "Petites équipes qui veulent une image à la hauteur de leur travail." },
    { t: "Activités sur rendez-vous", d: "Prestataires dont chaque appel ou demande compte vraiment." },
  ],

  beforeAfter: {
    before: {
      label: "Avant",
      url: "ancien-site.fr",
      items: [
        "Page d'accueil confuse : on ne sait pas ce que vous proposez.",
        "Avis et réalisations absents ou difficiles à trouver.",
        "Numéro de téléphone perdu en bas de page.",
        "Affichage lent et mal adapté sur mobile.",
      ],
    },
    after: {
      label: "Après",
      url: "vizelys.fr/votre-activite",
      items: [
        "Message clair : votre métier et votre zone compris en un coup d'œil.",
        "Avis et réalisations mis en avant comme preuves de confiance.",
        "Bouton d'appel et de devis visibles en permanence.",
        "Site rapide, net et impeccable sur mobile.",
      ],
    },
  },

  faq: [
    { q: "Combien de temps prend un projet ?", a: "La plupart des sites sont livrés en 3 à 5 semaines selon le contenu disponible et le nombre de pages. On vous donne un calendrier clair dès le départ, et on avance par étapes que vous validez." },
    { q: "Comment se passe la tarification ?", a: "Chaque activité est différente, donc chaque devis l'est aussi. Après un premier échange, nous vous envoyons une proposition détaillée, sans surprise ni engagement. Vous savez exactement ce qui est inclus." },
    { q: "Le référencement, c'est garanti ?", a: "Personne de sérieux ne peut \"garantir la première place\" sur Google. Ce que nous garantissons, c'est un site techniquement propre, lisible et structuré pour être bien compris localement — les bases d'un bon référencement durable." },
    { q: "À qui appartient le site une fois livré ?", a: "À vous, entièrement. Vous restez propriétaire de votre nom de domaine, de vos contenus et de votre site. Nous vous expliquons aussi comment le faire vivre simplement." },
    { q: "Faut-il déjà avoir un site ?", a: "Non. Nous travaillons aussi bien sur une première présence en ligne que sur la refonte d'un site existant. Dans les deux cas, on part de votre activité réelle." },
    { q: "Travaillez-vous dans mon secteur d'activité ?", a: "Nous accompagnons les entreprises locales qui vivent de la confiance : artisans, commerces, cabinets, indépendants et TPE/PME. Si votre réputation se joue au contact, c'est pour vous." },
  ],

  contactSteps: [
    { t: "Un premier échange", d: "On parle de votre activité, vos clients et vos objectifs. Sans engagement." },
    { t: "Une proposition claire", d: "Vous recevez une recommandation et un devis détaillé, adaptés à votre situation." },
    { t: "La mise en œuvre", d: "On construit, vous validez par étapes, et on vous accompagne après la mise en ligne." },
  ],
}
