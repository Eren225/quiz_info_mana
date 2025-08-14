// Données du jeu Meteor Defense avec leurres intelligents
const meteorGameData = {
    raci: {
        title: "Mission RACI Defense",
        objective: "Cliquez sur les 4 vrais rôles RACI et ignorez les leurres !",
        correctAnswers: ["Responsible", "Accountable", "Consulted", "Informed"],
        decoys: [
            "Respectful", "Reliable", "Responsive", // Leurres pour Responsible
            "Achievable", "Accessible", "Applicable", // Leurres pour Accountable  
            "Coordinated", "Confirmed", "Contracted", // Leurres pour Consulted
            "Interested", "Integrated", "Involved" // Leurres pour Informed
        ],
        difficulty: "easy",
        meteorSpeed: 6000, // Augmenté de 3000 à 6000ms
        spawnRate: 2000 // Augmenté de 1500 à 2000ms
    },
    prince2_themes: {
        title: "Mission Thèmes PRINCE2",
        objective: "Détruisez les 7 vrais thèmes PRINCE2 et évitez les faux !",
        correctAnswers: ["Business Case", "Organisation", "Qualité", "Plans", "Risques", "Changement", "Progrès"],
        decoys: [
            "Business Plan", "Business Model", // Leurres pour Business Case
            "Optimisation", "Opération", // Leurres pour Organisation
            "Quantité", "Quotient", // Leurres pour Qualité
            "Planification", "Plateformes", // Leurres pour Plans
            "Résultats", "Ressources", // Leurres pour Risques
            "Challenges", "Contrôle", // Leurres pour Changement
            "Processus", "Programmes" // Leurres pour Progrès
        ],
        difficulty: "medium",
        meteorSpeed: 5000, // Augmenté de 2500 à 5000ms
        spawnRate: 1800 // Augmenté de 1200 à 1800ms
    },
    prince2_principes: {
        title: "Mission Principes PRINCE2",
        objective: "Éliminez les 7 vrais principes PRINCE2 parmi les leurres !",
        correctAnswers: [
            "Justification commerciale continue",
            "Apprendre de l'expérience", 
            "Rôles et responsabilités définis",
            "Management par séquences",
            "Management par exception",
            "Focalisation produit",
            "Adapter au contexte"
        ],
        decoys: [
            "Justification technique continue", // Leurre pour Justification commerciale
            "Apprendre des erreurs", // Leurre pour Apprendre de l'expérience
            "Rôles et responsabilités assignés", // Leurre pour Rôles définis
            "Management par objectifs", // Leurre pour Management par séquences
            "Management par expertise", // Leurre pour Management par exception
            "Focalisation client", // Leurre pour Focalisation produit
            "Adapter aux ressources" // Leurre pour Adapter au contexte
        ],
        difficulty: "hard",
        meteorSpeed: 4500, // Augmenté de 2000 à 4500ms
        spawnRate: 1600 // Augmenté de 1000 à 1600ms
    },
    pdca: {
        title: "Mission PDCA Defense",
        objective: "Sauvez le cycle PDCA en cliquant sur les 4 vraies étapes !",
        correctAnswers: ["Plan", "Do", "Check", "Act"],
        decoys: [
            "Prepare", "Process", "Predict", // Leurres pour Plan
            "Deploy", "Decide", "Design", // Leurres pour Do
            "Control", "Calculate", "Complete", // Leurres pour Check
            "Analyze", "Approve", "Apply" // Leurres pour Act
        ],
        difficulty: "easy",
        meteorSpeed: 5500, // Augmenté de 3500 à 5500ms
        spawnRate: 2200 // Augmenté de 1800 à 2200ms
    }
};

// Classe principale du jeu Meteor Defense
class MeteorDefenseGame {
    constructor() {
        this.currentLevel = null;
        this.gameActive = false;
        this.isPaused = false;
        this.score = 0;
        this.health = 100;
        this.foundAnswers = 0;
        this.totalAnswers = 0;
        this.meteors = [];
        this.meteorId = 0;
        this.spawnTimer = null;
        this.gameTimer = null;
        this.gameStartTime = 0;
    }

    startLevel(levelKey) {
        if (!meteorGameData[levelKey]) {
            console.error('Niveau non trouvé:', levelKey);
            return false;
        }

        this.currentLevel = meteorGameData[levelKey];
        this.gameActive = true;
        this.isPaused = false;
        this.score = 0;
        this.health = 100;
        this.foundAnswers = 0;
        this.totalAnswers = this.currentLevel.correctAnswers.length;
        this.meteors = [];
        this.meteorId = 0;
        this.gameStartTime = Date.now();

        // Mettre à jour l'interface
        this.updateGameUI();
        this.startMeteorSpawning();
        this.startGameLoop();

        return true;
    }

    updateGameUI() {
        document.querySelector(".mission-title").textContent = this.currentLevel.title;
        document.querySelector(".mission-objective").textContent = this.currentLevel.objective;
        document.querySelector(".score-value").textContent = this.score;
        document.querySelector(".found-value").textContent = this.foundAnswers;
        document.querySelector(".total-value").textContent = this.totalAnswers;
        this.updateHealthBar();
        this.updateBuildingStatus();
    }

    updateHealthBar() {
        const healthFill = document.querySelector(".health-fill");
        const healthText = document.querySelector(".health-text");
        
        healthFill.style.width = this.health + "%";
        healthText.textContent = Math.round(this.health) + "%";
        
        // Changer la couleur selon la santé
        if (this.health > 70) {
            healthFill.style.backgroundColor = "#10b981"; // Vert
        } else if (this.health > 30) {
            healthFill.style.backgroundColor = "#f59e0b"; // Orange
        } else {
            healthFill.style.backgroundColor = "#ef4444"; // Rouge
        }
    }

    updateBuildingStatus() {
        const building = document.querySelector(".building-body");
        const status = document.querySelector(".building-status");
        
        if (this.health > 70) {
            building.textContent = "🏢";
            status.textContent = "INTACT";
            status.style.color = "#10b981";
        } else if (this.health > 30) {
            building.textContent = "🏗️";
            status.textContent = "ENDOMMAGÉ";
            status.style.color = "#f59e0b";
        } else if (this.health > 0) {
            building.textContent = "🏚️";
            status.textContent = "CRITIQUE";
            status.style.color = "#ef4444";
        } else {
            building.textContent = "💥";
            status.textContent = "DÉTRUIT";
            status.style.color = "#ef4444";
            this.endGame(false);
        }
    }

    startMeteorSpawning() {
        this.spawnTimer = setInterval(() => {
            if (this.gameActive && !this.isPaused) {
                this.spawnMeteor();
            }
        }, this.currentLevel.spawnRate);
    }

    spawnMeteor() {
        const container = document.querySelector(".meteors-container");
        const meteor = document.createElement("div");
        meteor.className = "meteor";
        meteor.id = `meteor-${this.meteorId++}`;
        
        // Choisir un terme (correct ou leurre)
        const allTerms = [...this.currentLevel.correctAnswers, ...this.currentLevel.decoys];
        const term = allTerms[Math.floor(Math.random() * allTerms.length)];
        const isCorrect = this.currentLevel.correctAnswers.includes(term);
        
        // Position aléatoire en haut
        const leftPosition = Math.random() * (container.offsetWidth - 150);
        
        meteor.innerHTML = `
            <div class="meteor-body">
                <div class="meteor-text">${term}</div>
            </div>
        `;
        
        meteor.style.left = leftPosition + "px";
        meteor.style.top = "-80px";
        meteor.dataset.term = term;
        meteor.dataset.correct = isCorrect;
        
        // Événement de clic
        meteor.addEventListener('click', () => this.clickMeteor(meteor));
        
        container.appendChild(meteor);
        
        // Animation de chute
        this.animateMeteorFall(meteor);
        
        // Stocker la référence
        this.meteors.push({
            element: meteor,
            term: term,
            isCorrect: isCorrect,
            id: meteor.id
        });
    }

    animateMeteorFall(meteorElement) {
        const container = document.querySelector(".meteors-container");
        const fallDistance = container.offsetHeight + 100;
        
        meteorElement.style.transition = `top ${this.currentLevel.meteorSpeed}ms linear`;
        meteorElement.style.top = fallDistance + "px";
        
        // Supprimer la météorite quand elle atteint le sol
        setTimeout(() => {
            if (meteorElement.parentNode && this.gameActive) {
                this.meteorHitGround(meteorElement);
            }
        }, this.currentLevel.meteorSpeed);
    }

    meteorHitGround(meteorElement) {
        const isCorrect = meteorElement.dataset.correct === 'true';
        
        if (isCorrect) {
            // Perdre de la vie si on laisse passer une bonne réponse
            this.health -= 15;
            this.createImpactEffect(meteorElement, 'miss');
        }
        
        this.removeMeteor(meteorElement);
        this.updateGameUI();
    }

    clickMeteor(meteorElement) {
        const term = meteorElement.dataset.term;
        const isCorrect = meteorElement.dataset.correct === 'true';
        
        if (isCorrect) {
            // Bonne réponse !
            this.foundAnswers++;
            this.score += 100;
            this.createExplosion(meteorElement, 'success');
            
            // Vérifier si le niveau est terminé
            if (this.foundAnswers >= this.totalAnswers) {
                setTimeout(() => this.endGame(true), 500);
            }
        } else {
            // Mauvaise réponse (leurre)
            this.health -= 10;
            this.score = Math.max(0, this.score - 25);
            this.createExplosion(meteorElement, 'error');
        }
        
        this.removeMeteor(meteorElement);
        this.updateGameUI();
    }

    createExplosion(meteorElement, type) {
        const container = document.querySelector(".explosions-container");
        const explosion = document.createElement("div");
        explosion.className = `explosion ${type}`;
        
        const rect = meteorElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        explosion.style.left = (rect.left - containerRect.left) + "px";
        explosion.style.top = (rect.top - containerRect.top) + "px";
        
        if (type === 'success') {
            explosion.innerHTML = '💥✨';
        } else {
            explosion.innerHTML = '💥❌';
        }
        
        container.appendChild(explosion);
        
        // Supprimer l'explosion après l'animation
        setTimeout(() => {
            if (explosion.parentNode) {
                explosion.parentNode.removeChild(explosion);
            }
        }, 1000);
    }

    createImpactEffect(meteorElement, type) {
        const building = document.querySelector(".building");
        building.classList.add('building-hit');
        
        setTimeout(() => {
            building.classList.remove('building-hit');
        }, 500);
    }

    removeMeteor(meteorElement) {
        // Supprimer de la liste
        this.meteors = this.meteors.filter(m => m.id !== meteorElement.id);
        
        // Supprimer du DOM
        if (meteorElement.parentNode) {
            meteorElement.parentNode.removeChild(meteorElement);
        }
    }

    startGameLoop() {
        this.gameTimer = setInterval(() => {
            if (this.gameActive && !this.isPaused) {
                // Nettoyer les météorites hors écran
                this.cleanupMeteors();
                
                // Vérifier les conditions de fin
                if (this.health <= 0) {
                    this.endGame(false);
                }
            }
        }, 100);
    }

    cleanupMeteors() {
        const container = document.querySelector(".meteors-container");
        const meteorsToRemove = [];
        
        this.meteors.forEach(meteor => {
            const element = meteor.element;
            if (element && element.offsetTop > container.offsetHeight) {
                meteorsToRemove.push(element);
            }
        });
        
        meteorsToRemove.forEach(meteor => {
            if (meteor.dataset.correct === 'true') {
                // Météorite correcte manquée
                this.health -= 15;
            }
            this.removeMeteor(meteor);
        });
    }

    pauseGame() {
        this.isPaused = !this.isPaused;
        const btn = document.querySelector(".pause-btn");
        btn.textContent = this.isPaused ? "▶️ Reprendre" : "⏸️ Pause";
    }

    endGame(won) {
        this.gameActive = false;
        clearInterval(this.spawnTimer);
        clearInterval(this.gameTimer);
        
        const gameTime = (Date.now() - this.gameStartTime) / 1000;
        const finalScore = this.score + (won ? Math.round(this.health) : 0);
        
        this.showResults(won, gameTime, finalScore);
    }

    showResults(won, gameTime, finalScore) {
        const resultsContainer = document.querySelector(".meteor-results");
        
        const resultHtml = `
            <div class="mission-complete ${won ? 'victory' : 'defeat'}">
                <h3>${won ? '🎉 MISSION ACCOMPLIE !' : '💥 MISSION ÉCHOUÉE !'}</h3>
                <div class="mission-summary">
                    <div class="result-stats">
                        <div class="stat">
                            <span class="stat-label">Temps:</span>
                            <span class="stat-value">${gameTime.toFixed(1)}s</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Score Final:</span>
                            <span class="stat-value">${finalScore}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Trouvés:</span>
                            <span class="stat-value">${this.foundAnswers}/${this.totalAnswers}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Bâtiment:</span>
                            <span class="stat-value">${Math.round(this.health)}%</span>
                        </div>
                    </div>
                    ${won ? 
                        '<div class="victory-message">Excellent travail, défenseur ! Le bâtiment est sauvé ! 🏢✨</div>' :
                        '<div class="defeat-message">Le bâtiment a été détruit... Réessayez pour sauver la ville ! 💪</div>'
                    }
                </div>
                <div class="mission-actions">
                    <button class="btn" onclick="restartMeteorLevel()">🔄 Recommencer</button>
                    <button class="btn secondary-btn" onclick="backToLevelSelection()">🎯 Autres missions</button>
                    <button class="btn" onclick="goToHomeFromMeteor()">🏠 Accueil</button>
                </div>
            </div>
        `;
        
        resultsContainer.innerHTML = resultHtml;
        
        // Afficher les résultats
        document.querySelector(".meteor-session").classList.add("hide");
        resultsContainer.classList.remove("hide");
    }

    stopGame() {
        this.gameActive = false;
        if (this.spawnTimer) clearInterval(this.spawnTimer);
        if (this.gameTimer) clearInterval(this.gameTimer);
        
        // Nettoyer les météorites
        const container = document.querySelector(".meteors-container");
        container.innerHTML = '';
        this.meteors = [];
    }
}

// Instance globale du jeu
const meteorGame = new MeteorDefenseGame();
