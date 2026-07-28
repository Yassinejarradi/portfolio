/*
 * Detailed documentation content for each project modal.
 * Keyed by the project id used in translation.json soloProjects.
 *
 *   id 1 → IT Support / Ticketing
 *   id 2 → Vote en Ligne
 *   id 3 → Taklif (Mandats & Représentations)
 *   id 4 → Gestion des Achats & Fournitures
 */

export const projectDetails = {

  // ── 1. SupportDesk — Plateforme SaaS B2B multi-tenant ────────────────────
  1: {
    tagline: "Plateforme SaaS B2B multi-tenant de gestion de tickets de support IT pour PME",
    overview: [
      "SupportDesk est une plateforme SaaS B2B construite en multi-tenant — une seule application qui sert plusieurs entreprises clientes, chacune avec sa propre base de données MySQL isolée, son propre branding et ses propres utilisateurs. Conçue pour les PME de moins de 50 employés qui gèrent encore leurs demandes IT par WhatsApp ou email.",
      "Un employé soumet une demande → un technicien la prend en charge → résout → l'employé confirme → ticket fermé. Tout se passe en temps réel via WebSockets (Laravel Reverb), avec Kanban board, QR codes équipements, auto-assignation en 4 modes, notifications instantanées et rapports analytiques. 171 tests PHPUnit / 519 assertions — tous verts.",
    ],
    techStack: [
      "Laravel 12", "React", "Inertia.js", "MySQL 8",
      "Tailwind CSS", "shadcn/ui", "Framer Motion",
      "Laravel Reverb", "Spatie Permission", "Laravel Sanctum",
      "stancl/tenancy v3", "PHPUnit",
    ],
    roles: [
      {
        name: "Super Admin (Yassine)",
        icon: "bx-crown",
        capabilities: [
          "Voir toutes les entreprises abonnées avec leurs statistiques globales",
          "Suspendre, réactiver ou supprimer un tenant",
          "Impersoner un responsable pour l'assister à distance",
          "Gérer les abonnements et accéder aux logs globaux",
        ],
      },
      {
        name: "Responsable Technique",
        icon: "bx-shield-alt-2",
        capabilities: [
          "Créer et inviter techniciens et employés par email",
          "Personnaliser le branding (logo, couleurs, police, favicon)",
          "Configurer catégories, SLA et règles d'auto-assignation (4 modes)",
          "Voir tous les tickets, forcer l'assignation, changer n'importe quel statut",
          "Gérer les équipements, générer des QR codes, accéder aux rapports",
        ],
      },
      {
        name: "Technicien IT",
        icon: "bx-wrench",
        capabilities: [
          "Claim (prendre en charge) un ticket non assigné",
          "Takeover (reprendre) un ticket avec confirmation du modal",
          "Changer le statut de ses tickets uniquement",
          "Ajouter commentaires publics (visibles) et notes internes (cachées)",
          "Utiliser le Kanban board et consulter les équipements",
        ],
      },
      {
        name: "Employé",
        icon: "bx-user",
        capabilities: [
          "Soumettre un ticket (formulaire ou scan QR code équipement)",
          "Voir uniquement ses propres tickets et leur statut en temps réel",
          "Commenter publiquement et dialoguer avec le technicien",
          "Confirmer la résolution (ferme le ticket) ou refuser (rouvre)",
          "Laisser une note de satisfaction 😊 😐 😞",
        ],
      },
    ],
    workflow: [
      "L'employé crée le ticket (titre, description, catégorie, priorité) ou scanne le QR code d'un équipement — numéro TKT-XXXX généré automatiquement, statut : Ouvert.",
      "Notification instantanée envoyée à tous les techniciens en temps réel ; auto-assignation appliquée si une règle est configurée (round-robin, par catégorie ou par priorité).",
      "Un technicien clique « Prendre en charge » (Claim) ou le responsable assigne de force — statut passe à En cours, visible par l'employé sans rechargement.",
      "Traitement : échanges de commentaires publics en temps réel, notes internes entre techniciens, timeline d'activité horodatée à chaque action.",
      "Le technicien marque le ticket Résolu — l'employé reçoit un email + une bannière verte : « Votre problème a-t-il été résolu ? »",
      "L'employé confirme → statut Fermé + note de satisfaction ; ou refuse → Rouvert → En cours, notification envoyée à tous les techniciens.",
      "Si aucune réponse sous 3 jours, le système ferme automatiquement le ticket et envoie un email de satisfaction à l'employé.",
    ],
    statuses: ["Ouvert", "En cours", "En attente client", "En attente tiers", "Résolu", "Rouvert", "Fermé"],
    modules: [
      "Gestion des tickets (liste + Kanban)",
      "Système Claim / Takeover",
      "Auto-assignation (4 modes)",
      "QR codes équipements",
      "Notifications temps réel (Reverb)",
      "Timeline d'activité",
      "Commentaires publics & notes internes",
      "Personnalisation branding",
      "Catégories & SLA",
      "Rapports & Analytics",
      "Gestion des utilisateurs & rôles",
      "Multi-tenant (DB isolée par client)",
      "Panel Super Admin",
      "Fermeture automatique (3 jours)",
    ],
    dashboardMetrics: [
      { label: "Tickets ouverts",           icon: "bx-folder-open" },
      { label: "En cours",                  icon: "bx-time" },
      { label: "Résolus",                   icon: "bx-check-circle" },
      { label: "Taux de résolution",        icon: "bx-trending-up" },
      { label: "Temps moyen de résolution", icon: "bx-stopwatch" },
      { label: "Top agents (semaine)",      icon: "bx-user-check" },
      { label: "Tenants actifs",            icon: "bx-buildings" },
      { label: "171 tests / 519 assertions",icon: "bx-test-tube" },
    ],
  },

  // ── 2. Vote en Ligne ───────────────────────────────────────────────────────
  2: {
    tagline: "Système de vote digital sécurisé et transparent",
    overview: [
      "Plateforme permettant d'organiser des élections régionales de manière digitale, sécurisée et transparente, avec suivi des résultats en temps réel et journalisation complète pour audit.",
    ],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    roles: [
      {
        name: "Administrateur",
        icon: "bx-shield-alt-2",
        capabilities: [
          "Crée les élections (titre, dates, candidats)",
          "Gère les électeurs inscrits",
          "Consulte les rapports d'audit complets",
        ],
      },
      {
        name: "Électeur",
        icon: "bx-user",
        capabilities: [
          "Accède au scrutin via un lien sécurisé",
          "Vote de manière anonyme et chiffrée",
          "Consulte les résultats en temps réel",
        ],
      },
    ],
    workflow: [
      "L'administrateur crée une élection (titre, dates, candidats).",
      "Les électeurs inscrits reçoivent un accès sécurisé.",
      "Le vote est enregistré de manière anonyme et chiffrée.",
      "Les résultats sont mis à jour en temps réel.",
      "Un journal d'audit complet est généré après la clôture.",
    ],
    statuses: null,
    modules: [
      "Gestion des élections",
      "Gestion des candidats",
      "Gestion des électeurs",
      "Vote sécurisé",
      "Résultats en temps réel",
      "Journal d'audit",
    ],
    dashboardMetrics: null,
  },

  // ── 3. Taklif — Mandats & Représentations ─────────────────────────────────
  3: {
    tagline: "Gestion digitale des mandats et demandes de représentation",
    overview: [
      "Application permettant de gérer les mandats accordés aux représentants et les demandes de représentation officielles, avec gestion des rôles, génération de documents PDF, export Excel et traçabilité administrative complète.",
    ],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    roles: [
      {
        name: "Administrateur",
        icon: "bx-shield-alt-2",
        capabilities: [
          "Gère tous les mandats, utilisateurs et paramètres",
          "Approuve ou refuse les demandes",
          "Génère les rapports et exports",
        ],
      },
      {
        name: "Utilisateur",
        icon: "bx-user",
        capabilities: [
          "Soumet des demandes de représentation",
          "Consulte ses mandats actifs",
          "Télécharge les documents générés",
        ],
      },
    ],
    workflow: [
      "L'utilisateur soumet une demande de représentation.",
      "L'administrateur examine et approuve ou refuse.",
      "Le mandat est généré automatiquement en PDF.",
      "L'historique complet est consultable, export Excel disponible.",
    ],
    statuses: null,
    modules: [
      "Gestion des mandats",
      "Gestion des demandes",
      "Génération PDF",
      "Export Excel",
      "Gestion des utilisateurs",
      "Matrice des permissions",
    ],
    dashboardMetrics: null,
  },

  // ── 4. Gestion des Achats & Fournitures ───────────────────────────────────
  4: {
    tagline: "Digitalisation complète du cycle d'approvisionnement",
    overview: [
      "L'application centralise l'ensemble du processus d'approvisionnement de l'entreprise, depuis l'expression du besoin jusqu'à la livraison finale.",
      "Elle couvre les demandes d'achats et fournitures, les validations, devis, commandes, réceptions, livraisons, gestion des stocks et tableaux de bord analytiques.",
    ],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Bootstrap", "AJAX"],
    roles: [
      {
        name: "Demandeur",
        icon: "bx-user",
        capabilities: [
          "Crée des demandes d'achat ou de fourniture",
          "Consulte l'état en temps réel",
          "Réceptionne les articles livrés",
        ],
      },
      {
        name: "Validateur / Responsable",
        icon: "bx-check-shield",
        capabilities: [
          "Accepte ou refuse les demandes",
          "Ajoute des observations ou motifs",
        ],
      },
      {
        name: "Service Achats",
        icon: "bx-purchase-tag",
        capabilities: [
          "Prépare les consultations fournisseurs",
          "Établit les devis comparatifs",
          "Crée et suit les commandes",
        ],
      },
      {
        name: "Magasinier",
        icon: "bx-package",
        capabilities: [
          "Réceptionne les articles livrés",
          "Contrôle les quantités et met à jour le stock",
          "Livre les articles aux demandeurs",
        ],
      },
      {
        name: "Administrateur",
        icon: "bx-shield-alt-2",
        capabilities: [
          "Gère utilisateurs, rôles, articles, fournisseurs",
          "Accède aux statistiques globales",
          "Configure les paramètres de l'application",
        ],
      },
    ],
    workflow: [
      "Le demandeur crée une demande (statut : Brouillon → Créée).",
      "Le responsable valide ou refuse (statut : Validée / Refusée).",
      "Si fourniture → vérification du stock → livraison directe si disponible.",
      "Si achat → consultation fournisseur → devis → commande → réception → livraison.",
      "Le magasinier réceptionne, contrôle les quantités et met à jour le stock.",
      "Les articles sont remis au demandeur, la livraison est enregistrée.",
    ],
    statuses: ["Créée", "Validée", "En cours", "Livrée", "Clôturée", "Refusée"],
    modules: [
      "Gestion des Demandes",
      "Gestion des Articles",
      "Gestion des Fournisseurs",
      "Gestion des Devis",
      "Gestion des Achats",
      "Gestion du Stock",
      "Gestion des Livraisons",
      "Statistiques & Reporting",
    ],
    dashboardMetrics: [
      { label: "Total demandes",          icon: "bx-file" },
      { label: "DDS en cours",            icon: "bx-time" },
      { label: "DDS livrées",             icon: "bx-check-circle" },
      { label: "DDS refusées",            icon: "bx-x-circle" },
      { label: "Nombre d'articles",       icon: "bx-package" },
      { label: "Nombre de fournisseurs",  icon: "bx-buildings" },
      { label: "Valeur du stock",         icon: "bx-trending-up" },
    ],
  },
};
