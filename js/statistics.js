// Système de statistiques pour les questions
class QuizStatistics {
    constructor() {
        this.statsKey = 'quiz_statistics';
        this.stats = this.loadStats();
    }

    // Charger les statistiques depuis localStorage
    loadStats() {
        try {
            const stored = localStorage.getItem(this.statsKey);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            console.error('Erreur lors du chargement des statistiques:', e);
        }
        return {};
    }

    // Sauvegarder les statistiques dans localStorage
    saveStats() {
        try {
            localStorage.setItem(this.statsKey, JSON.stringify(this.stats));
        } catch (e) {
            console.error('Erreur lors de la sauvegarde des statistiques:', e);
        }
    }

    // Enregistrer une réponse (correcte ou incorrecte)
    recordAnswer(questionText, isCorrect) {
        // Utiliser le hash de la question comme clé unique
        const questionId = this.hashCode(questionText);
        
        if (!this.stats[questionId]) {
            this.stats[questionId] = {
                questionText: questionText.substring(0, 100) + '...', // Texte tronqué pour l'affichage
                totalAttempts: 0,
                wrongAttempts: 0,
                correctAttempts: 0,
                errorRate: 0
            };
        }

        this.stats[questionId].totalAttempts++;
        
        if (isCorrect) {
            this.stats[questionId].correctAttempts++;
        } else {
            this.stats[questionId].wrongAttempts++;
        }

        // Calculer le taux d'erreur
        this.stats[questionId].errorRate = 
            (this.stats[questionId].wrongAttempts / this.stats[questionId].totalAttempts * 100).toFixed(1);

        this.saveStats();
    }

    // Obtenir le classement des questions les plus échouées
    getMostFailedQuestions(limit = 10) {
        const questionStats = Object.values(this.stats);
        
        // Filtrer les questions avec au moins 3 tentatives pour avoir des données significatives
        const significantStats = questionStats.filter(stat => stat.totalAttempts >= 3);
        
        // Trier par taux d'erreur décroissant
        return significantStats
            .sort((a, b) => parseFloat(b.errorRate) - parseFloat(a.errorRate))
            .slice(0, limit);
    }

    // Obtenir les statistiques générales
    getGeneralStats() {
        const questionStats = Object.values(this.stats);
        const totalQuestions = questionStats.length;
        const totalAttempts = questionStats.reduce((sum, stat) => sum + stat.totalAttempts, 0);
        const totalCorrect = questionStats.reduce((sum, stat) => sum + stat.correctAttempts, 0);
        const totalWrong = questionStats.reduce((sum, stat) => sum + stat.wrongAttempts, 0);
        
        return {
            totalQuestions,
            totalAttempts,
            totalCorrect,
            totalWrong,
            globalSuccessRate: totalAttempts > 0 ? ((totalCorrect / totalAttempts) * 100).toFixed(1) : 0
        };
    }

    // Réinitialiser toutes les statistiques
    resetStats() {
        this.stats = {};
        this.saveStats();
    }

    // Obtenir les questions correspondant aux statistiques les plus échouées
    getFailedQuestionsData(limit = 10) {
        const mostFailed = this.getMostFailedQuestions(limit);
        const failedQuestions = [];
        
        // Rechercher les questions originales correspondantes
        mostFailed.forEach(statQuestion => {
            // Retrouver la question originale en comparant les IDs
            const statId = Object.keys(this.stats).find(id => 
                this.stats[id].questionText === statQuestion.questionText
            );
            
            if (statId) {
                // Trouver la question originale qui correspond à cet ID
                const foundQuestion = quiz.find(q => {
                    const questionId = this.hashCode(q.q);
                    return questionId === statId;
                });
                
                if (foundQuestion) {
                    failedQuestions.push({
                        question: foundQuestion,
                        errorRate: statQuestion.errorRate,
                        attempts: statQuestion.totalAttempts
                    });
                }
            }
        });
        
        return failedQuestions;
    }

    // Fonction utilitaire pour créer un hash simple d'une chaîne
    hashCode(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convertir en 32bit integer
        }
        return Math.abs(hash).toString();
    }

    // Exporter les statistiques en JSON pour téléchargement
    exportStats() {
        const exportData = {
            exportDate: new Date().toISOString(),
            generalStats: this.getGeneralStats(),
            questionStats: this.stats,
            mostFailedQuestions: this.getMostFailedQuestions(20)
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `quiz_statistics_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }
}

// Instance globale des statistiques
const quizStats = new QuizStatistics();
