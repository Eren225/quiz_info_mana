// PRINCE2 Memory Sprint - Jeu de mémorisation des 7 Principes et 7 Thèmes

// Données PRINCE2 pour Memory Sprint
const memorySprintData = {
    principes: [
        "Justification commerciale continue",
        "Apprendre de l'expérience", 
        "Rôles et responsabilités définis",
        "Management par séquences",
        "Management par exception",
        "Focalisation produit",
        "Adapter au contexte"
    ],
    themes: [
        "Business Case",
        "Organisation", 
        "Qualité",
        "Plans",
        "Risques",
        "Changement",
        "Progrès"
    ],
    
    // Questions pour l'étape 1 (choix multiple)
    principesQuestions: [
        {
            question: "Justification commerciale ___",
            options: ["permanente", "continue", "obligatoire", "nécessaire"],
            correct: 1,
            fullName: "Justification commerciale continue"
        },
        {
            question: "Apprendre de l'___",
            options: ["erreur", "expérience", "échec", "expertise"],
            correct: 1,
            fullName: "Apprendre de l'expérience"
        },
        {
            question: "Rôles et responsabilités ___",
            options: ["assignés", "définis", "distribués", "délégués"],
            correct: 1,
            fullName: "Rôles et responsabilités définis"
        },
        {
            question: "Management par ___",
            options: ["objectifs", "séquences", "étapes", "phases"],
            correct: 1,
            fullName: "Management par séquences"
        },
        {
            question: "Management par ___",
            options: ["excellence", "exception", "expertise", "expérience"],
            correct: 1,
            fullName: "Management par exception"
        },
        {
            question: "Focalisation ___",
            options: ["client", "produit", "résultat", "objectif"],
            correct: 1,
            fullName: "Focalisation produit"
        },
        {
            question: "Adapter au ___",
            options: ["projet", "contexte", "besoin", "client"],
            correct: 1,
            fullName: "Adapter au contexte"
        }
    ],
    
    themesQuestions: [
        {
            question: "Business ___",
            options: ["Plan", "Case", "Model", "Strategy"],
            correct: 1,
            fullName: "Business Case",
            context: "Justifier l'investissement du projet"
        },
        {
            question: "Gérer les équipes et structures du projet",
            options: ["Plans", "Organisation", "Qualité", "Progrès"],
            correct: 1,
            fullName: "Organisation",
            context: "Définir qui fait quoi"
        },
        {
            question: "S'assurer que les produits respectent les standards",
            options: ["Qualité", "Plans", "Changement", "Progrès"],
            correct: 0,
            fullName: "Qualité",
            context: "Critères d'acceptation et tests"
        },
        {
            question: "Définir comment atteindre les objectifs",
            options: ["Risques", "Plans", "Progrès", "Changement"],
            correct: 1,
            fullName: "Plans",
            context: "Roadmap et planification"
        },
        {
            question: "Gérer les incertitudes du projet",
            options: ["Plans", "Risques", "Qualité", "Progrès"],
            correct: 1,
            fullName: "Risques",
            context: "Identifier et mitiger les menaces"
        },
        {
            question: "Gérer les modifications du projet",
            options: ["Changement", "Progrès", "Plans", "Organisation"],
            correct: 0,
            fullName: "Changement",
            context: "Control des évolutions"
        },
        {
            question: "Suivre l'avancement du projet",
            options: ["Plans", "Qualité", "Progrès", "Risques"],
            correct: 2,
            fullName: "Progrès",
            context: "Monitoring et reporting"
        }
    ]
};

// Classe principale du jeu Memory Sprint
class MemorySprintGame {
    constructor() {
        this.currentMode = null; // 'principes' ou 'themes'
        this.currentPhase = 1; // 1 = choix multiple, 2 = récitation
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.masteredItems = new Set();
        this.gameActive = false;
        this.startTime = 0;
    }

    startMode(mode) {
        this.currentMode = mode;
        this.currentPhase = 1;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.gameActive = true;
        this.startTime = Date.now();
        
        // Cacher la sélection et afficher le jeu
        document.querySelector('.memory-mode-selection').classList.add('hide');
        document.querySelector('.memory-game-session').classList.remove('hide');
        
        // Initialiser l'interface
        this.updateGameUI();
        this.showCurrentQuestion();
    }

    updateGameUI() {
        const modeTitle = this.currentMode === 'principes' ? '7 Principes PRINCE2' : '7 Thèmes PRINCE2';
        const phaseTitle = this.currentPhase === 1 ? 'Phase 1: Reconnaissance' : 'Phase 2: Récitation complète';
        
        document.querySelector('.sprint-mode-title').textContent = modeTitle;
        document.querySelector('.sprint-phase-title').textContent = phaseTitle;
        document.querySelector('.sprint-score').textContent = this.score;
        document.querySelector('.sprint-progress').textContent = `${this.correctAnswers}/${this.currentMode === 'principes' ? '7' : '7'}`;
        
        // Mettre à jour la barre de progression
        const progressBar = document.querySelector('.progress-bar-fill');
        const progressPercent = (this.correctAnswers / 7) * 100;
        progressBar.style.width = progressPercent + '%';
        
        // Mettre à jour les éléments maîtrisés
        document.querySelector('.mastered-count').textContent = this.masteredItems.size;
    }

    showCurrentQuestion() {
        const questions = this.currentMode === 'principes' ? 
            memorySprintData.principesQuestions : memorySprintData.themesQuestions;
        
        if (this.currentPhase === 1) {
            // Phase 1: Choix multiple
            if (this.currentQuestionIndex < questions.length) {
                this.showMultipleChoiceQuestion(questions[this.currentQuestionIndex]);
            } else {
                // Toutes les questions sont terminées, passer à la phase 2
                this.startPhase2();
            }
        } else {
            // Phase 2: Récitation
            this.showRecitationPhase();
        }
    }

    showMultipleChoiceQuestion(questionData) {
        const container = document.querySelector('.question-container');
        
        container.innerHTML = `
            <div class="sprint-question">
                <h3>Question ${this.currentQuestionIndex + 1}/7</h3>
                <div class="question-text">${questionData.question}</div>
                ${questionData.context ? `<div class="question-context">💡 ${questionData.context}</div>` : ''}
                <div class="options-grid">
                    ${questionData.options.map((option, index) => `
                        <button class="option-btn" onclick="memorySprintGame.selectAnswer(${index})" data-index="${index}">
                            ${String.fromCharCode(65 + index)}) ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        document.querySelector('.recitation-container').classList.add('hide');
        container.classList.remove('hide');
    }

    selectAnswer(selectedIndex) {
        const questions = this.currentMode === 'principes' ? 
            memorySprintData.principesQuestions : memorySprintData.themesQuestions;
        const currentQuestion = questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === currentQuestion.correct;
        
        // Afficher le feedback
        this.showAnswerFeedback(isCorrect, currentQuestion.fullName);
        
        if (isCorrect) {
            this.score += 100;
            this.correctAnswers++;
            this.masteredItems.add(currentQuestion.fullName);
        }
        
        // Passer à la question suivante après un délai
        setTimeout(() => {
            this.currentQuestionIndex++;
            this.updateGameUI();
            this.showCurrentQuestion();
        }, 2000);
    }

    showAnswerFeedback(isCorrect, correctAnswer) {
        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => {
            btn.disabled = true;
            if (isCorrect && btn.dataset.index == this.currentQuestionIndex) {
                btn.classList.add('correct');
            }
        });
        
        const feedback = document.createElement('div');
        feedback.className = `answer-feedback ${isCorrect ? 'correct' : 'wrong'}`;
        feedback.innerHTML = `
            <div class="feedback-icon">${isCorrect ? '✅' : '❌'}</div>
            <div class="feedback-text">
                ${isCorrect ? 'Excellent !' : 'Réponse correcte :'}
                <strong>${correctAnswer}</strong>
            </div>
        `;
        
        document.querySelector('.sprint-question').appendChild(feedback);
    }

    startPhase2() {
        this.currentPhase = 2;
        this.updateGameUI();
        this.showRecitationPhase();
    }

    showRecitationPhase() {
        const container = document.querySelector('.recitation-container');
        const targetList = this.currentMode === 'principes' ? 
            memorySprintData.principes : memorySprintData.themes;
        
        container.innerHTML = `
            <div class="recitation-challenge">
                <h3>🎯 Phase 2: Récitation complète</h3>
                <div class="challenge-instruction">
                    Listez maintenant TOUS les ${this.currentMode === 'principes' ? '7 principes' : '7 thèmes'} PRINCE2 :
                </div>
                
                <div class="recitation-input">
                    <textarea 
                        id="recitation-textarea" 
                        placeholder="Tapez les ${targetList.length} éléments, un par ligne..."
                        rows="8"
                    ></textarea>
                    <div class="input-hints">
                        💡 Tapez un élément par ligne. L'ordre n'est pas important.
                    </div>
                </div>
                
                <div class="recitation-progress">
                    <div class="found-items">Trouvés: <span id="found-count">0</span>/${targetList.length}</div>
                    <div class="validation-live">
                        <div id="validation-feedback"></div>
                    </div>
                </div>
                
                <div class="recitation-actions">
                    <button class="btn" onclick="memorySprintGame.validateRecitation()">🔍 Valider</button>
                    <button class="btn secondary-btn" onclick="memorySprintGame.showHint()">💡 Indice</button>
                    <button class="btn secondary-btn" onclick="memorySprintGame.resetRecitation()">🔄 Recommencer</button>
                </div>
                
                <div class="recitation-help">
                    <details>
                        <summary>🆘 Besoin d'aide ?</summary>
                        <div class="help-content">
                            <p>Les ${this.currentMode === 'principes' ? 'principes' : 'thèmes'} commencent par :</p>
                            <ul>
                                ${targetList.map(item => `<li>${item.split(' ')[0]}...</li>`).join('')}
                            </ul>
                        </div>
                    </details>
                </div>
            </div>
        `;
        
        document.querySelector('.question-container').classList.add('hide');
        container.classList.remove('hide');
        
        // Ajouter la validation en temps réel
        document.getElementById('recitation-textarea').addEventListener('input', () => {
            this.validateRecitationLive();
        });
    }

    validateRecitationLive() {
        const textarea = document.getElementById('recitation-textarea');
        const input = textarea.value.toLowerCase();
        const targetList = this.currentMode === 'principes' ? 
            memorySprintData.principes : memorySprintData.themes;
        
        let foundCount = 0;
        const foundItems = [];
        
        targetList.forEach(item => {
            if (input.includes(item.toLowerCase())) {
                foundCount++;
                foundItems.push(item);
            }
        });
        
        document.getElementById('found-count').textContent = foundCount;
        
        const feedback = document.getElementById('validation-feedback');
        if (foundCount === targetList.length) {
            feedback.innerHTML = '🎉 Parfait ! Tous les éléments trouvés !';
            feedback.className = 'validation-success';
        } else {
            feedback.innerHTML = `✅ ${foundCount} trouvé(s), ${targetList.length - foundCount} manquant(s)`;
            feedback.className = 'validation-partial';
        }
    }

    validateRecitation() {
        const textarea = document.getElementById('recitation-textarea');
        const input = textarea.value.toLowerCase();
        const targetList = this.currentMode === 'principes' ? 
            memorySprintData.principes : memorySprintData.themes;
        
        let foundCount = 0;
        const foundItems = [];
        const missingItems = [];
        
        targetList.forEach(item => {
            if (input.includes(item.toLowerCase())) {
                foundCount++;
                foundItems.push(item);
            } else {
                missingItems.push(item);
            }
        });
        
        if (foundCount === targetList.length) {
            // Récitation parfaite !
            this.score += 500;
            this.endSprintMode(true);
        } else {
            // Montrer ce qui manque
            this.showRecitationFeedback(foundItems, missingItems);
        }
    }

    showRecitationFeedback(found, missing) {
        const feedback = document.getElementById('validation-feedback');
        feedback.innerHTML = `
            <div class="recitation-results">
                <div class="found-section">
                    <strong>✅ Trouvés (${found.length}) :</strong>
                    <ul>${found.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
                ${missing.length > 0 ? `
                    <div class="missing-section">
                        <strong>❌ Manquants (${missing.length}) :</strong>
                        <ul>${missing.map(item => `<li>${item}</li>`).join('')}</ul>
                    </div>
                ` : ''}
            </div>
        `;
        feedback.className = 'validation-detailed';
    }

    showHint() {
        const targetList = this.currentMode === 'principes' ? 
            memorySprintData.principes : memorySprintData.themes;
        const textarea = document.getElementById('recitation-textarea');
        const input = textarea.value.toLowerCase();
        
        // Trouver un élément manquant
        const missing = targetList.find(item => !input.includes(item.toLowerCase()));
        
        if (missing) {
            const firstWords = missing.split(' ').slice(0, 2).join(' ');
            alert(`💡 Indice: "${firstWords}..."`);
        } else {
            alert('🎉 Vous avez déjà tout trouvé !');
        }
    }

    resetRecitation() {
        document.getElementById('recitation-textarea').value = '';
        document.getElementById('found-count').textContent = '0';
        document.getElementById('validation-feedback').innerHTML = '';
    }

    endSprintMode(success) {
        this.gameActive = false;
        const endTime = Date.now();
        const totalTime = (endTime - this.startTime) / 1000;
        
        this.showSprintResults(success, totalTime);
    }

    showSprintResults(success, totalTime) {
        const resultsContainer = document.querySelector('.memory-results');
        const mode = this.currentMode === 'principes' ? 'Principes' : 'Thèmes';
        
        resultsContainer.innerHTML = `
            <div class="sprint-results ${success ? 'success' : 'partial'}">
                <h3>${success ? '🏆 SPRINT RÉUSSI !' : '📈 SPRINT TERMINÉ'}</h3>
                
                <div class="results-summary">
                    <div class="result-stat">
                        <span class="stat-label">Mode:</span>
                        <span class="stat-value">${mode} PRINCE2</span>
                    </div>
                    <div class="result-stat">
                        <span class="stat-label">Temps:</span>
                        <span class="stat-value">${totalTime.toFixed(1)}s</span>
                    </div>
                    <div class="result-stat">
                        <span class="stat-label">Score Final:</span>
                        <span class="stat-value">${this.score} pts</span>
                    </div>
                    <div class="result-stat">
                        <span class="stat-label">Éléments Maîtrisés:</span>
                        <span class="stat-value">${this.masteredItems.size}/7</span>
                    </div>
                </div>
                
                ${success ? `
                    <div class="success-message">
                        🎯 Parfait ! Vous maîtrisez maintenant les ${mode} PRINCE2 !
                    </div>
                ` : `
                    <div class="partial-message">
                        💪 Bon travail ! Continuez à vous entraîner pour une maîtrise complète.
                    </div>
                `}
                
                <div class="sprint-actions">
                    <button class="btn" onclick="memorySprintGame.restartMode()">🔄 Recommencer ce mode</button>
                    <button class="btn secondary-btn" onclick="memorySprintGame.switchMode()">🔀 Autre mode</button>
                    <button class="btn" onclick="goToHomeFromMemorySprint()">🏠 Accueil</button>
                </div>
            </div>
        `;
        
        // Afficher les résultats
        document.querySelector('.memory-game-session').classList.add('hide');
        resultsContainer.classList.remove('hide');
    }

    restartMode() {
        this.masteredItems.clear();
        this.startMode(this.currentMode);
        document.querySelector('.memory-results').classList.add('hide');
    }

    switchMode() {
        document.querySelector('.memory-results').classList.add('hide');
        document.querySelector('.memory-mode-selection').classList.remove('hide');
    }
}

// Instance globale du jeu
const memorySprintGame = new MemorySprintGame();

// Fonctions globales pour l'interface
function startMemorySprintMode(mode) {
    memorySprintGame.startMode(mode);
}

function goToHomeFromMemorySprint() {
    // Cacher tous les containers du memory sprint
    document.querySelector('.memory-sprint-box').classList.add('hide');
    
    // Réinitialiser les containers
    document.querySelector('.memory-mode-selection').classList.remove('hide');
    document.querySelector('.memory-game-session').classList.add('hide');
    document.querySelector('.memory-results').classList.add('hide');
    
    // Retourner à l'accueil
    document.querySelector('.home-box').classList.remove('hide');
}

function backToMemorySelection() {
    document.querySelector('.memory-game-session').classList.add('hide');
    document.querySelector('.memory-results').classList.add('hide');
    document.querySelector('.memory-mode-selection').classList.remove('hide');
}
