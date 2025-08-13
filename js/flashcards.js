// Données des flashcards organisées par thème
const flashcardData = {
    overview: {
        title: "Vue d'ensemble - Concepts clés",
        description: "Découvrez tous les éléments principaux de chaque thème",
        cards: [
            {
                front: "Matrice RACI",
                back: "Les 4 rôles : Responsible (Exécute), Accountable (Responsable final), Consulted (Consulté), Informed (Informé)"
            },
            {
                front: "Les 7 Thèmes PRINCE2",
                back: "Business Case • Organisation • Qualité • Plans • Risques • Changement • Progrès"
            },
            {
                front: "Les 7 Principes PRINCE2",
                back: "Justification commerciale continue • Apprendre de l'expérience • Rôles et responsabilités définis • Management par séquences • Management par exception • Focalisation produit • Adapter au contexte"
            },
            {
                front: "Cycle PDCA (Roue de Deming)",
                back: "Plan (Planifier) • Do (Exécuter) • Check (Vérifier) • Act (Améliorer) - Cycle d'amélioration continue"
            },
            {
                front: "Règles importantes RACI",
                back: "Un seul 'A' par tâche • Tous les rôles doivent être définis • Communication bidirectionnelle pour 'C' • Communication unidirectionnelle pour 'I'"
            },
            {
                front: "Applications du PDCA",
                back: "Gestion de la qualité • Résolution de problèmes • Amélioration des processus • Gestion de projet • Innovation"
            }
        ]
    },
    raci: {
        title: "Matrice RACI",
        description: "Clarification des rôles et responsabilités dans un projet",
        cards: [
            {
                front: "R - Responsible",
                back: "Responsable de l'exécution : Personne qui exécute la tâche ou l'activité. Il peut y avoir plusieurs responsables pour une même tâche."
            },
            {
                front: "A - Accountable",
                back: "Redevable/Imputable : Personne qui est responsable du résultat final et qui doit rendre des comptes. Il ne peut y avoir qu'un seul A par tâche."
            },
            {
                front: "C - Consulted",
                back: "Consulté : Personne dont l'avis ou l'expertise est sollicitée avant la prise de décision. Communication bidirectionnelle."
            },
            {
                front: "I - Informed",
                back: "Informé : Personne qui doit être tenue au courant des décisions ou des actions. Communication unidirectionnelle."
            },
            {
                front: "Quand utiliser RACI ?",
                back: "Pour clarifier les rôles, éviter les conflits de responsabilité, améliorer la communication et s'assurer qu'aucune tâche n'est oubliée."
            },
            {
                front: "Règle du 'A' unique",
                back: "Il ne doit y avoir qu'un seul 'A' (Accountable) par tâche pour éviter la confusion des responsabilités et assurer une prise de décision claire."
            }
        ]
    },
    prince2_themes: {
        title: "Les 7 Thèmes PRINCE2",
        description: "Les aspects de la gestion de projet qui doivent être traités en continu",
        cards: [
            {
                front: "Business Case",
                back: "Justification continue du projet. Répond à : 'Pourquoi ce projet ?' Évalue la viabilité commerciale tout au long du projet."
            },
            {
                front: "Organisation",
                back: "Structure de responsabilité temporaire pour le projet. Définit les rôles, responsabilités et relations entre toutes les parties prenantes."
            },
            {
                front: "Qualité",
                back: "Définition et livraison de produits conformes aux attentes. Inclut la planification, le contrôle et l'assurance qualité."
            },
            {
                front: "Plans",
                back: "Processus de conception, de développement et de maintenance des plans projet. Couvre la planification basée sur les produits."
            },
            {
                front: "Risques",
                back: "Identification, évaluation et gestion des incertitudes. Approche systématique pour gérer les menaces et opportunités."
            },
            {
                front: "Changement",
                back: "Identification, évaluation et contrôle des changements potentiels par rapport à la baseline approuvée."
            },
            {
                front: "Progrès",
                back: "Suivi et comparaison des réalisations par rapport au plan. Surveillance continue de la viabilité du projet."
            }
        ]
    },
    prince2_principes: {
        title: "Les 7 Principes PRINCE2",
        description: "Règles fondamentales et bonnes pratiques qui déterminent si le projet est géré selon PRINCE2",
        cards: [
            {
                front: "Justification commerciale continue",
                back: "Le projet doit rester justifiable commercialement. Si ce n'est plus le cas, le projet doit être arrêté."
            },
            {
                front: "Apprendre de l'expérience",
                back: "Les équipes projet doivent apprendre des expériences antérieures et appliquer ces enseignements au projet actuel."
            },
            {
                front: "Rôles et responsabilités définis",
                back: "Chaque membre de l'équipe doit comprendre son rôle et ses responsabilités dans le projet."
            },
            {
                front: "Management par séquences",
                back: "Le projet est décomposé en phases (séquences) gérables pour un meilleur contrôle."
            },
            {
                front: "Management par exception",
                back: "Les niveaux hiérarchiques supérieurs ne s'impliquent que lorsque les tolérances sont dépassées."
            },
            {
                front: "Focalisation produit",
                back: "PRINCE2 se concentre sur la définition et la livraison de produits plutôt que sur les activités."
            },
            {
                front: "Adapter au contexte du projet",
                back: "PRINCE2 doit être adapté à l'environnement, la taille, la complexité, l'importance et la capacité du projet."
            }
        ]
    },
    pdca: {
        title: "Roue de Deming (PDCA)",
        description: "Cycle d'amélioration continue pour la gestion de la qualité",
        cards: [
            {
                front: "P - Plan (Planifier)",
                back: "Identifier les opportunités d'amélioration, analyser la situation actuelle, définir les objectifs et planifier les actions."
            },
            {
                front: "D - Do (Faire/Exécuter)",
                back: "Mettre en œuvre le plan d'action de manière contrôlée, souvent à petite échelle pour tester l'efficacité."
            },
            {
                front: "C - Check (Vérifier)",
                back: "Mesurer et évaluer les résultats obtenus par rapport aux objectifs fixés. Analyser les écarts."
            },
            {
                front: "A - Act (Agir/Améliorer)",
                back: "Standardiser les améliorations efficaces et planifier les prochains cycles d'amélioration."
            },
            {
                front: "Principe de la roue de Deming",
                back: "Amélioration continue par cycles itératifs. Chaque cycle permet d'apprendre et d'améliorer le processus."
            },
            {
                front: "Applications du PDCA",
                back: "Gestion de la qualité, résolution de problèmes, amélioration des processus, gestion de projet, innovation."
            },
            {
                front: "Avantages du PDCA",
                back: "Approche systématique, réduction des risques, amélioration continue, implication des équipes, mesure des résultats."
            }
        ]
    }
};

// Classe pour gérer les flashcards
class FlashcardManager {
    constructor() {
        this.currentTheme = null;
        this.currentCardIndex = 0;
        this.currentCards = [];
        this.showingFront = true;
        this.studiedCards = [];
        this.masteredCards = [];
    }

    // Démarre une session de flashcards pour un thème donné
    startSession(theme) {
        if (!flashcardData[theme]) {
            console.error('Thème non trouvé:', theme);
            return false;
        }

        this.currentTheme = theme;
        this.currentCards = [...flashcardData[theme].cards];
        this.currentCardIndex = 0;
        this.showingFront = true;
        this.studiedCards = [];
        this.masteredCards = [];
        
        // Mélanger les cartes
        this.shuffleCards();
        
        return true;
    }

    // Mélange les cartes
    shuffleCards() {
        for (let i = this.currentCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.currentCards[i], this.currentCards[j]] = [this.currentCards[j], this.currentCards[i]];
        }
    }

    // Obtient la carte actuelle
    getCurrentCard() {
        if (this.currentCardIndex >= this.currentCards.length) {
            return null;
        }
        return this.currentCards[this.currentCardIndex];
    }

    // Retourne la carte
    flipCard() {
        this.showingFront = !this.showingFront;
        return this.showingFront;
    }

    // Marque la carte comme comprise et passe à la suivante
    markAsUnderstood() {
        const currentCard = this.getCurrentCard();
        if (currentCard && !this.masteredCards.includes(currentCard)) {
            this.masteredCards.push(currentCard);
        }
        this.nextCard();
    }

    // Marque la carte comme difficile et la remet dans la pile
    markAsDifficult() {
        const currentCard = this.getCurrentCard();
        if (currentCard) {
            // Ajouter la carte à la fin pour la revoir plus tard
            this.currentCards.push(currentCard);
        }
        this.nextCard();
    }

    // Passe à la carte suivante
    nextCard() {
        if (!this.studiedCards.includes(this.getCurrentCard())) {
            this.studiedCards.push(this.getCurrentCard());
        }
        
        this.currentCardIndex++;
        this.showingFront = true;
        
        // Si on a fini toutes les cartes, recommencer avec les cartes difficiles
        if (this.currentCardIndex >= this.currentCards.length) {
            const difficultCards = this.currentCards.slice(this.studiedCards.length);
            if (difficultCards.length > 0) {
                this.currentCards = difficultCards;
                this.currentCardIndex = 0;
                this.shuffleCards();
            }
        }
    }

    // Obtient les statistiques de la session
    getSessionStats() {
        const totalCards = flashcardData[this.currentTheme].cards.length;
        return {
            theme: flashcardData[this.currentTheme].title,
            totalCards: totalCards,
            studiedCards: this.studiedCards.length,
            masteredCards: this.masteredCards.length,
            currentIndex: this.currentCardIndex + 1,
            remaining: Math.max(0, this.currentCards.length - this.currentCardIndex),
            progress: Math.round((this.studiedCards.length / totalCards) * 100)
        };
    }

    // Vérifie si la session est terminée
    isSessionComplete() {
        return this.currentCardIndex >= this.currentCards.length && 
               this.masteredCards.length === flashcardData[this.currentTheme].cards.length;
    }

    // Redémarre la session avec les cartes non maîtrisées
    restartWithDifficultCards() {
        const allCards = flashcardData[this.currentTheme].cards;
        this.currentCards = allCards.filter(card => !this.masteredCards.includes(card));
        
        if (this.currentCards.length === 0) {
            // Toutes les cartes sont maîtrisées, reprendre toutes les cartes
            this.currentCards = [...allCards];
            this.masteredCards = [];
        }
        
        this.currentCardIndex = 0;
        this.showingFront = true;
        this.shuffleCards();
    }
}

// Instance globale du gestionnaire de flashcards
const flashcardManager = new FlashcardManager();
