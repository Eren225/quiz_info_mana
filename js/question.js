const quiz = [
  {
    "q": "Quelles propositions correspondent au rôle de Product Owner ?",
    "options": [
      "Protège l’équipe des événements extérieurs perturbateurs",
      "Possède la “vision” du produit",
      "Crée et priorise les items du backlog",
      "Veille à la bonne application de la méthodologie SCRUM",
      "Aide à la collaboration entre l'équipe de développement et le Scrum Master"
    ],
    "answer": [
      1,
      2
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Un inconvénient potentiel d'une structure organisationnelle matricielle est…",
    "options": [
      "De provoquer des conflits entre responsabilité hiérarchique et fonctionnelle pouvant entraîner un manque de clarté pour les collaborateurs.",
      "Toutes les propositions sont correctes",
      "De limiter le choix des personnes impliquées dans un projet.",
      "Aucune des propositions n'est correcte",
      "De limiter le partage d'expérience.",
      "De provoquer une concurrence interne entre les différentes divisions."
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Un offre au forfait correspond à : (cochez la réponse correcte)",
    "options": [
      "Aucune des propositions n'est correcte.",
      "Un projet à prix fixe sur un périmètre défini.",
      "Un projet dans lequel une méthodologie agile est appliquée.",
      "Un mise à disposition d'un ou plusieurs collaborateurs à un tarif journalier fixé sur une durée définie.",
      "Toutes les propositions sont correctes.",
      "Une provision utilisée sur base de mini-forfaits."
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Au niveau de l'étape 'Act' de la roue de Demming, on va :",
    "options": [
      "Analyser l’existant.",
      "Toutes les propositions sont correctes.",
      "Planifier et définir les KPI.",
      "Définir les objectifs à atteindre et les responsabilités.",
      "Aucune des propositions n'est correcte."
    ],
    "answer": 4,
    "topic": "gestion_projet"
  },
  {
    "q": "Veuillez choisir une réponse (MVP).",
    "options": [
      "Aucune des propositions n'est correcte",
      "Un MVP est la version d'un produit (par exemple un logiciel) qui permet d'obtenir un maximum de retours client avec un minimum d'effort",
      "L'acronyme MVP signifie Most Valuable Product",
      "Un MVP est un produit (par exemple un logiciel) pour lequel la phase de test a été automatisée",
      "L'acronyme MVP signifie Most Viable Product"
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Veuillez choisir une réponse (WBS).",
    "options": [
      "L'acronyme WBS signifie Work Breakdown System",
      "Aucune proposition n'est correcte.",
      "Un WBS inclut une dimension temporelle.",
      "Le WBS est un outil de planification",
      "Un WBS est utilisé pour identifier les responsables des tâches à effectuer",
      "Toutes les propositions sont correctes."
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Parmi les propositions suivantes, choisissez celle(s) qui représente(nt) des objectifs de la gouvernance IT.",
    "options": [
      "Assurer le bon déroulement des activités et des processus au quotidien.",
      "Faciliter la collaboration et la coordination entre (groupes de) collaborateurs.",
      "La mise en place de la structure organisationnelle (pyramidale, fonctionnelle, matricielle...).",
      "L'alignement stratégique.",
      "La définition de la nature des relations d'autorité hiérarchique et fonctionnelle."
    ],
    "answer": 3,
    "topic": "gestion_projet"
  },
  {
    "q": "La société NSI propose un contrat de 'Software Assurance'. Cochez les éléments inclus :",
    "options": [
      "Le maintien de la connaissance au sein des équipes NSI.",
      "Le remplacement du hardware devenu obsolète.",
      "L'ajout sans surcoût de nouvelles fonctionnalités mineures (maximum 5 jours de travail par an).",
      "Le maintien d'un environnement technique chez NSI pour les futures évolutions.",
      "La maintenance corrective.",
      "La mise à disposition d'un consultant pour former les utilisateurs (maximum 2 jours par an)."
    ],
    "answer": [
      0,
      3,
      4
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Établissez les correspondances entre les phases du modèle Waterfall et les activités proposées.",
    "options": [
      "Requirements : Rédaction du cahier des charges",
      "Analysis : Identification des règles métiers",
      "Design : Choix d’architecture technique",
      "Code : Déploiement du produit",
      "Test : Vérification de la conformité par rapport aux critères d’acceptation",
      "Maintenance : Déploiement correctifs et/ou améliorations fonctionnelles"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Dans PRINCE2, le thème RISQUE vise à... (cochez les bonnes propositions)",
    "options": [
      "Assurer que la gestion des risques fait partie intégrante de la gestion de projet, et que les risques sont régulièrement surveillés et réévalués.",
      "Fournir une méthode systématique pour identifier, évaluer et répondre aux risques de manière proactive.",
      "Aider le Comité de Pilotage, le Chef de Projet et les autres parties prenantes à prendre des décisions éclairées face aux risques.",
      "Aider le Comité de Pilotage à contrôler les modifications afin d’éviter des dérives dans le projet.",
      "RISQUE n'est pas un thème mais un principe."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Le positionnement de la structure IT disséminée signifie…",
    "options": [
      "Aucune des propositions n'est correcte",
      "Qu'il y a une structure IT dans chaque département, division, localisation",
      "Toutes les propositions sont correctes",
      "Que la structure IT est rattachée au service qui est le plus gros utilisateur.",
      "Que la structure IT est rattachée à la direction générale.",
      "Que les services IT sont externalisés."
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Avec une approche incrémentale,",
    "options": [
      "on applique les principes du TDD",
      "on développe les différentes parties les unes après les autres",
      "on spécifie de manière précise toutes les caractéristiques du produit",
      "on donne une vision globale du produit",
      "on développe au plus vite un produit minimum viable (MVP)"
    ],
    "answer": [
      1,
      2
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "En entreprise, parmi les propositions suivantes, choisissez celle(s) qui correspond(ent) à une décision stratégique.",
    "options": [
      "Toutes les propositions sont correctes.",
      "Aucune des propositions n'est correcte",
      "Décision prise à un niveau opérationnel pour gérer les affaires au jour le jour.",
      "Décision dictée par un changement de contexte tel qu'une pandémie.",
      "Décision dictée par un changement de contexte tel que l'arrivée d'un concurrent.",
      "Décision qui engage l’organisation sur le long terme (minimum 5 ans)."
    ],
    "answer": 5,
    "topic": "gestion_projet"
  },
  {
    "q": "À propos de GANTT (acronyme et usages)",
    "options": [
      "L'acronyme GANTT signifie Global Allocation for Nominative Task Timing",
      "Un diagramme de GANTT est utilisé pour représenter le périmètre d’un projet et les différents délivrables.",
      "L'acronyme GANTT est un outil d'aide à la décision",
      "Toutes les propositions sont correctes.",
      "Un diagramme de GANTT n'inclut pas de dimension temporelle",
      "Aucune proposition n'est correcte."
    ],
    "answer": 5,
    "topic": "gestion_projet"
  },
  {
    "q": "Dans la variante RASCI, que signifie et quel est le rôle du 'S' ?",
    "options": [
      "Supervisor : supervise l'exécution des tâches",
      "Supervisor : supervise la planification des tâches",
      "Support : s'occupe du support auprès de la clientèle",
      "Toutes les propositions sont correctes.",
      "Aucune proposition n'est correcte",
      "Support : fournit les ressources nécessaires pour la bonne réalisation de la tâche"
    ],
    "answer": 5,
    "topic": "gestion_projet"
  },
  {
    "q": "Le 'C' de l'acronyme RACI signifie \"Contribute\"",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "PRINCE2 — sélectionnez les énoncés corrects à propos du risque",
    "options": [
      "Dans PRINCE2, les risques sont identifiés grâce à la stratégie de gestion des risques choisies.",
      "Dans PRINCE2, RISQUE n'est pas un thème mais un principe.",
      "Dans PRINCE2, le thème RISQUE vise à assurer que les risques sont régulièrement surveillés et réévalués.",
      "Dans PRINCE2, le thème RISQUE vise à aider le Comité de Pilotage, le Chef de Projet et les autres parties prenantes à prendre des décisions éclairées face aux risques.",
      "Dans PRINCE2, un risque est défini comme une situation ou un événement incertain, qui peut avoir un impact positif ou négatif sur les objectifs du projet."
    ],
    "answer": [
      2,
      3,
      4
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Quelles propositions correspondent au rôle de Scrum Master ?",
    "options": [
      "Veille à la bonne application de la méthodologie SCRUM",
      "Possède la “vision” du produit",
      "Crée et priorise les items du backlog",
      "Protège l’équipe des événements extérieurs perturbateurs",
      "Aide à la collaboration entre l'équipe et le product owner"
    ],
    "answer": [
      0,
      3,
      4
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Avec une approche itérative,",
    "options": [
      "on applique les principes du TDD",
      "on développe les différentes parties les unes après les autres",
      "on développe au plus vite un produit minimum viable (MVP)",
      "on donne une vision globale du produit",
      "on spécifie de manière précise toutes les caractéristiques du produit"
    ],
    "answer": [
      2,
      3
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Au niveau de l'étape 'Check' de la roue de Demming, on va :",
    "options": [
      "Mesurer le gain de qualité (KPI).",
      "Analyser l'existant.",
      "Toutes les propositions sont correctes.",
      "Identifier les points d’amélioration et prendre des mesures préventives ou correctives.",
      "Aucune des propositions n'est correcte."
    ],
    "answer": 0,
    "topic": "gestion_projet"
  },
  {
    "q": "Le 'A' de l'acronyme RACI signifie \"Analyst\"",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Quelles propositions correspondent au Sprint review ?",
    "options": [
      "Le Sprint review est une cérémonie durant laquelle le Product backlog sera mis à jour en ajoutant de nouveaux PBI ou en repriorisant les PBI existants.",
      "Le Sprint review est une cérémonie durant laquelle on peut procéder à une révision du DoD ou du DoR",
      "Le Sprint review est la cérémonie qui détermine l'objectif du sprint",
      "Le Sprint review est la cérémonie qui montre visuellement le travail qui a été accompli et celui restant à accomplir pour le sprint",
      "Le Sprint review est la cérémonie à laquelle participent uniquement l'équipe de développement et le Scrum master"
    ],
    "answer": [
      0,
      1
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "En entreprise, une décision est prise dans le but d'atteindre un objectif. On caractérise généralement les décisions selon 3 types. Quels sont-ils ?",
    "options": [
      "Décisions stratégiques, décisions politiques et décisions d'alignement",
      "Décisions à long terme, décisions à moyen terme et décisions à court terme",
      "Aucune des propositions n'est correcte",
      "Décisions stratégiques, décisions tactiques et décisions opérationnelles",
      "Décisions stratégiques, décisions financières et décisions juridiques",
      "Décisions stratégiques, décisions d'alignement et décisions d'exploitation"
    ],
    "answer": 3,
    "topic": "gestion_projet"
  },
  {
    "q": "Choisissez la bonne proposition (diagramme de GANTT).",
    "options": [
      "Toutes les propositions sont correctes.",
      "Aucune proposition n'est correcte.",
      "Un diagramme de GANTT est un outil de planification et de suivi de progrès",
      "Un diagramme de GANTT permet de voir l'état de progression d'une tâche.",
      "Un diagramme de GANTT permet d'indiquer d'éventuelles dépendances entre des tâches.",
      "Un diagramme de GANTT inclut une dimension temporelle"
    ],
    "answer": 0,
    "topic": "gestion_projet"
  },
  {
    "q": "Le positionnement de la structure IT diffère d'une entreprise à l'autre. Lorsque la structure IT est centralisée, cela signifie...",
    "options": [
      "Toutes les propositions sont correctes",
      "qu'elle est positionnée au centre de l'organigramme",
      "Aucune des propositions n'est correcte",
      "qu'elle est rattachée au service qui est le plus gros utilisateur",
      "qu'elle est indépendante du reste de l'organigramme",
      "que les services IT sont sous-traités à un organisme central."
    ],
    "answer": 2,
    "topic": "gestion_projet"
  },
  {
    "q": "Le positionnement de la structure IT diffère d'une entreprise à l'autre. Lorsque la structure IT est fragmentée, cela signifie...",
    "options": [
      "que la structure IT est rattachée au service qui est le plus gros utilisateur.",
      "qu'il y a une structure IT par centre de coûts (administratif, gestion du personnel, production, sous-traitance...)",
      "qu'il y a une structure IT par localisation (europe, asie, amérique…)",
      "qu'il y a une structure IT par département (finance, comptabilité, production…)",
      "Toutes les propositions sont correctes",
      "Aucune des propositions n'est correcte"
    ],
    "answer": 5,
    "topic": "gestion_projet"
  },
  {
    "q": "Quelles propositions correspondent au Product backlog ?",
    "options": [
      "Le Product Backlog est créé au début du sprint",
      "Le Product Backlog est un ensemble de PBI sélectionnés pour le sprint",
      "Le Product Backlog est accessible à toutes les parties prenantes",
      "Le Product Backlog est une liste priorisée de tâches",
      "Le Product Backlog est dérivé de la Roadmap et des exigences du produit"
    ],
    "answer": [
      2,
      3,
      4
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Dans PRINCE2, sélectionnez les propositions correctes au sujet des thèmes.",
    "options": [
      "Dans PRINCE2, les thèmes sont des étapes séquentielles qui guident la gestion et la réalisation d'un projet.",
      "Dans PRINCE2, les thèmes fournissent une structure pour s'assurer que tous les aspects essentiels de la gestion du projet sont correctement gérés.",
      "Dans PRINCE2, les thèmes sont des lignes directrices fondamentales à suivre pour garantir que le projet est bien structuré, contrôlé et géré de manière appropriée.",
      "Dans PRINCE2, les thèmes sont liés à des décisions qui engagent l’organisation sur le long terme.",
      "Toutes les propositions sont correctes.",
      "Aucune des propositions n'est correcte."
    ],
    "answer": [
      1
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Parmi les propositions suivantes, choisissez celle(s) qui représente(nt) des objectifs de la gouvernance IT.",
    "options": [
      "L'alignement stratégique des systèmes et processus IT avec les objectifs stratégiques définis par la direction",
      "Assurer le bon déroulement des activités et des processus au quotidien.",
      "Le pilotage par projet.",
      "La supervision des performances via des indicateurs de performance",
      "La définition de la nature des relations d'autorité hiérarchique et fonctionnelle"
    ],
    "answer": [
      3,
      0
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Établissez les correspondances entre les phases du modèle Waterfall et les activités proposées.",
    "options": [
      "Requirements : Rédaction du cahier des charges",
      "Analysis : Achat de licences software",
      "Design : Choix d'architecture technique",
      "Code : Planification et suivi de projet",
      "Test : Vérification de la conformité par rapport aux critères d'acceptation",
      "Maintenance : Déploiement d'améliorations fonctionnelles"
    ],
    "answer": [
      0,
      2,
      4,
      5
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Une caractéristique d’une structure organisationnelle hiérarchique est :",
    "options": [
      "La rapidité du processus de prise de décision",
      "Être particulièrement adaptée aux organisations qui fonctionnent en mode projet",
      "Avoir une chaîne de commandement verticale assurant l’unicité de commandement",
      "Regrouper les collaborateurs en fonction de leur rôle et compétences",
      "Toutes les propositions sont correctes",
      "Aucune des propositions n'est correcte"
    ],
    "answer": 2,
    "topic": "gestion_projet"
  },
  {
    "q": "Le 'C' de l'acronyme RACI signifie \"Consulted\"",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "topic": "gestion_projet"
  },
  {
    "q": "Une des caractéristiques d'une structure organisationnelle matricielle est...",
    "options": [
      "de donner une grande clarté aux collaborateurs en ce qui concerne les responsabilités hiérarchiques et fonctionnelles",
      "de grouper les collaborateurs en fonction de leur rôle dans l’entreprise (et de leurs compétences)",
      "d'être particulièrement adaptée aux organisations qui fonctionnent en mode projet",
      "d'avoir une chaîne de commandement verticale assurant l'unicité de commandement",
      "Toutes les propositions sont correctes",
      "Aucune des propositions n'est correcte"
    ],
    "answer": 2,
    "topic": "gestion_projet"
  },
  {
    "q": "Le cycle en V est une évolution de la méthodologie Waterfall qui comporte une phase montante durant laquelle on spécifie le produit de manière de plus en plus détaillée.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "En entreprise, une décision opérationnelle est...",
    "options": [
      "Aucune des propositions n'est correcte",
      "Décision qui engage l’organisation sur le long terme (minimum 5 ans).",
      "Décision qui engage l’organisation sur le moyen terme (2 à 5 ans).",
      "Décision qui concerne la gestion courante de l’entreprise.",
      "Toutes les propositions sont correctes.",
      "Décision qui est difficilement réversible et qui présente un risque."
    ],
    "answer": 3,
    "topic": "gestion_projet"
  },
  {
    "q": "Le cycle en V est une évolution de la méthodologie Waterfall qui accorde plus d'importance à la validation du logiciel.",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 0,
    "topic": "gestion_projet"
  },
  {
    "q": "Avec une approche incrémentale,",
    "options": [
      "on spécifie de manière précise toutes les caractéristiques du produit",
      "on applique les principes du TDD",
      "on développe au plus vite un produit minimum viable (MVP)",
      "on développe les différentes parties les unes après les autres",
      "on donne une vision globale du produit"
    ],
    "answer": [
      0,
      3
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Choisissez la proposition correcte (MVP).",
    "options": [
      "Un MVP est la version d'un produit qui permet de limiter le nombre de bugs avec un minimum d'effort",
      "Aucune des propositions n'est correcte",
      "L'acronyme MVP signifie Most Valuable Product",
      "L'acronyme MVP signifie Most Viable Product",
      "Un MVP est un produit pour lequel la phase de test a été automatisée",
      "Toutes les propositions sont correctes."
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Structure IT fragmentée — cela signifie...",
    "options": [
      "qu'il y a une structure IT par domaine (développement, bureautique, infrastructure, support…)",
      "qu'il y a une structure IT par localisation (europe, asie, amérique…)",
      "qu'il y a une structure IT par centre de coûts (administratif, gestion du personnel, production, sous-traitance...)",
      "Toutes les propositions sont correctes",
      "Aucune des propositions n'est correcte",
      "qu'il y a une structure IT par département (finance, comptabilité, production…)"
    ],
    "answer": 0,
    "topic": "gestion_projet"
  },
  {
    "q": "Décisions en entreprise — quels sont les 3 types ?",
    "options": [
      "Décisions stratégiques, décisions financières et décisions juridiques",
      "Aucune des propositions n'est correcte",
      "Décisions stratégiques, décisions d'alignement et décisions d'exploitation",
      "Décisions à long terme, décisions à moyen terme et décisions à court terme",
      "Décisions stratégiques, décisions tactiques et décisions opérationnelles",
      "Décisions stratégiques, décisions politiques et décisions d'alignement"
    ],
    "answer": 4,
    "topic": "gestion_projet"
  },
  {
    "q": "PRINCE2 — propositions correctes au sujet du risque",
    "options": [
      "Dans PRINCE2, un risque est défini comme une situation ou un événement incertain, qui peut avoir un impact positif ou négatif sur les objectifs du projet.",
      "Dans PRINCE2,le thème RISQUE vise à assurer que les risques sont régulièrement surveillés et réévalués.",
      "Dans PRINCE2,les risques sont identifiés grâce à la stratégie de gestion des risques choisies.",
      "Dans PRINCE2, RISQUE n'est pas un thème mais un principe.",
      "Dans PRINCE2,le thème RISQUE vise à aider le Comité de Pilotage, le Chef de Projet et les autres parties prenantes à prendre des décisions éclairées face aux risques."
    ],
    "answer": [
      0,
      1,
      4
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Parmi les propositions suivantes, choisissez celle(s) qui représente(nt) des objectifs de la gouvernance IT.",
    "options": [
      "Prendre en compte les exigences de conformité externes telles que le RGPD.",
      "La définition de la nature des relations d'autorité hiérarchique et fonctionnelle.",
      "La gestion optimale des ressources techniques, humaines et financières.",
      "Faciliter la collaboration et la coordination entre (groupes de) collaborateurs.",
      "La mise en place de la structure organisationnelle (pyramidale, fonctionnelle, matricielle...)."
    ],
    "answer": [
      0,
      2
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Quelles propositions correspondent au Sprint planning ?",
    "options": [
      "Le Sprint planning est la cérémonie qui permet de construire le Sprint backlog",
      "Le Sprint planning est la cérémonie qui valide l'atteinte de l'objectif du sprint",
      "Le Sprint planning est la cérémonie qui montre visuellement le travail qui a été accompli et celui restant à accomplir pour le sprint",
      "Le Sprint planning est la cérémonie durant laquelle le Product Owner décrit le Sprint Goal et décide des priorités",
      "Le Sprint planning est la cérémonie à laquelle participent uniquement l'équipe de développement et le Scrum master"
    ],
    "answer": [
      0,
      3
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Le 'A' de l'acronyme RACI signifie 'Analyst'",
    "options": [
      "Vrai",
      "Faux"
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Etablissez les correspondances correctes entre les phases du modèle Waterfall et les activités proposées.",
    "options": [
      "Requirements : Rédaction du cahier des charges",
      "Analysis : Identification des règles métier",
      "Design : Choix d'architecture technique",
      "Code : Déploiement du produit",
      "Test : Vérification de la conformité par rapport aux critères d'acceptation",
      "Maintenance : Déploiement d'améliororations fonctionnelles"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Choisissez la bonne proposition (diagramme de GANTT).",
    "options": [
      "Un diagramme de GANTT inclut une dimension temporelle",
      "Un diagramme de GANTT permet de voir l'état de progression d'une tâche.",
      "Un diagramme de GANTT est un outil de planification et de suivi de progrès",
      "Toutes les propositions sont correctes.",
      "Aucune proposition n'est correcte.",
      "Un diagramme de GANTT permet d'indiquer d'éventuelles dépendances entre des tâches."
    ],
    "answer": 3,
    "topic": "gestion_projet"
  },
  {
    "q": "Un inconvénient potentiel d'une structure organisationnelle matricielle est...",
    "options": [
      "de provoquer des conflits entre responsabilité hiérarchique et fonctionnelle pouvant entraîner un manque clarté pour les collaborateurs.",
      "Toutes les propositions sont correctes",
      "Aucune des propositions n'est correcte",
      "de provoquer une concurrence interne entre les différentes divisions.",
      "de limiter le choix des personnes impliquées dans un projet.",
      "de limiter le partage d'expérience."
    ],
    "answer": 1,
    "topic": "gestion_projet"
  },
  {
    "q": "Au niveau de l'étape 'Check' de la roue de Demming, on va :",
    "options": [
      "Identifier les points d’amélioration et prendre des mesures préventives ou correctives.",
      "Aucune des propositions n'est correcte.",
      "Analyser l'existant.",
      "Toutes les propositions sont correctes.",
      "Mesurer le gain de qualité (KPI)."
    ],
    "answer": 4,
    "topic": "gestion_projet"
  },
  {
    "q": "Quelles propositions correspondent au Sprint backlog ?",
    "options": [
      "Le Sprint backlog contient l'objectif du sprint (objectif principal du sprint)",
      "Le Sprint backlog contient l'ensemble des PBI sélectionnés pour le sprint",
      "Le Sprint backlog contient le plan d'actions pour délivrer le sprint",
      "Le Sprint backlog est établi par le Product Owner en prenant en compte des éléments tels que l’évolution (potentielle) du marché…",
      "Le Sprint backlog montre visuellement le travail qui a été accompli et celui restant à accomplir pour le sprint"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "topic": "gestion_projet"
  },
  {
    "q": "Choisissez la bonne proposition (WBS).",
    "options": [
      "Aucune proposition n'est correcte.",
      "Un WBS inclut une dimension temporelle.",
      "L'acronyme WBS signifie Work Breakdown System",
      "Un WBS est utilisé pour représenter le périmètre d’un projet et les différents délivrables",
      "Le WBS est un outil de planification",
      "Toutes les propositions sont correctes."
    ],
    "answer": 3,
    "topic": "gestion_projet"
  }
];

