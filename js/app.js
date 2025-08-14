const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let correctlyAnsweredQuestions = [];
let totalQuestions = 0;
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let selectedAnswers = [];
let isFailedQuestionsMode = false; // Mode pour les questions échouées

function setAvailableQuestions(){
    totalQuestions = quiz.length;
    availableQuestions = [...quiz]; // Copy all questions
    correctlyAnsweredQuestions = []; // Reset correctly answered questions
    isFailedQuestionsMode = false;
}

function setFailedQuestions(){
    const failedQuestionsData = quizStats.getFailedQuestionsData(10);
    availableQuestions = failedQuestionsData.map(item => item.question);
    totalQuestions = availableQuestions.length;
    correctlyAnsweredQuestions = []; // Reset correctly answered questions
    isFailedQuestionsMode = true;
}

function getNewQuestion(){
    // Update progress display
    const remaining = availableQuestions.length;
    const completed = correctlyAnsweredQuestions.length;
    const modeText = isFailedQuestionsMode ? "Mode rattrapage - " : "";
    questionNumber.innerHTML = `${modeText}Questions restantes: ${remaining} | Réussies: ${completed}/${totalQuestions}`;
    
    // Check if all questions have been answered correctly
    if(availableQuestions.length === 0) {
        quizOver();
        return;
    }
    
    // Hide next button until question is answered
    hideNextButton();
    
    // Get a random question from available questions
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIndex];
    questionText.innerHTML = currentQuestion.q;
    
    // Reset selected answers for new question
    selectedAnswers = [];
    
    if(currentQuestion.hasOwnProperty("img")){
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
    }
    
    // Reset available options
    availableOptions = [];
    const optionsLength = currentQuestion.options.length;
    for(let i=0; i<optionsLength; i++){
        availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    
    // Check if it's a multiple choice question
    const isMultipleChoice = Array.isArray(currentQuestion.answer);
    
    let animationDelay = 0.2;
    for(let i=0; i<optionsLength; i++){
        const optionIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay+'s';
        animationDelay = animationDelay+0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        
        if(isMultipleChoice) {
            option.setAttribute("onclick", "toggleAnswer(this)");
        } else {
            option.setAttribute("onclick", "getResult(this)");
        }
    }
    
    // Add submit button for multiple choice questions
    if(isMultipleChoice) {
        const submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit Answers";
        submitButton.className = "btn submit-answers-btn";
        submitButton.setAttribute("onclick", "submitMultipleAnswers()");
        optionContainer.appendChild(submitButton);
    }
    
    questionCounter++;
}

function getResult(element){
    const id = parseInt(element.id);
    const isMultipleChoice = Array.isArray(currentQuestion.answer);
    
    if(!isMultipleChoice) {
        // Single choice logic
        let isCorrect = false;
        if(id === currentQuestion.answer){
            element.classList.add("correct");
            correctAnswers++;
            isCorrect = true;
            // Remove question from available questions (correctly answered)
            const questionIndex = availableQuestions.indexOf(currentQuestion);
            if(questionIndex > -1) {
                availableQuestions.splice(questionIndex, 1);
                correctlyAnsweredQuestions.push(currentQuestion);
            }
        }
        else{
            element.classList.add("wrong");
            // Show correct answer
            const optionLength = optionContainer.children.length;
            for(let i=0; i<optionLength; i++){
                if(parseInt(optionContainer.children[i].id)===currentQuestion.answer) {
                    optionContainer.children[i].classList.add("correct");
                }
            }
            
            // Question stays in available questions (will be asked again)
        }
        
        // Enregistrer la statistique
        quizStats.recordAnswer(currentQuestion.q, isCorrect);
        
        attempt++;
        unclickableOptions();
        showNextButton();
    }
}

function toggleAnswer(element) {
    const id = parseInt(element.id);
    
    if(element.classList.contains("selected")) {
        // Deselect
        element.classList.remove("selected");
        const index = selectedAnswers.indexOf(id);
        if(index > -1) {
            selectedAnswers.splice(index, 1);
        }
    } else {
        // Select
        element.classList.add("selected");
        selectedAnswers.push(id);
    }
}

function submitMultipleAnswers() {
    const correctAnswerArray = currentQuestion.answer;
    
    // Sort both arrays to compare
    selectedAnswers.sort((a, b) => a - b);
    const sortedCorrectAnswers = [...correctAnswerArray].sort((a, b) => a - b);
    
    // Check if answers match exactly
    const isCorrect = selectedAnswers.length === sortedCorrectAnswers.length && 
                     selectedAnswers.every((val, index) => val === sortedCorrectAnswers[index]);
    
    // Show correct/wrong styling
    const optionElements = optionContainer.querySelectorAll('.option');
    optionElements.forEach(option => {
        const optionId = parseInt(option.id);
        
        if(correctAnswerArray.includes(optionId)) {
            option.classList.add("correct");
        } else if(selectedAnswers.includes(optionId)) {
            option.classList.add("wrong");
        }
    });
    
    if(isCorrect) {
        correctAnswers++;
        // Remove question from available questions (correctly answered)
        const questionIndex = availableQuestions.indexOf(currentQuestion);
        if(questionIndex > -1) {
            availableQuestions.splice(questionIndex, 1);
            correctlyAnsweredQuestions.push(currentQuestion);
        }
    } else {
        // Question stays in available questions (will be asked again)
    }
    
    // Enregistrer la statistique
    quizStats.recordAnswer(currentQuestion.q, isCorrect);
    
    attempt++;
    unclickableOptions();
    
    // Hide submit button
    const submitBtn = optionContainer.querySelector('.submit-answers-btn');
    if(submitBtn) {
        submitBtn.style.display = 'none';
    }
    
    showNextButton();
}

function unclickableOptions(){
    const optionLength = optionContainer.children.length;
    for(let i=0; i<optionLength; i++){
        optionContainer.children[i].classList.add("already-answered");
    }
}

function showNextButton(){
    const nextBtn = document.querySelector(".next-btn");
    if(nextBtn) {
        nextBtn.style.display = "inline-block";
        nextBtn.disabled = false;
    }
}

function hideNextButton(){
    const nextBtn = document.querySelector(".next-btn");
    if(nextBtn) {
        nextBtn.style.display = "none";
        nextBtn.disabled = true;
    }
}

function next(){
    if(availableQuestions.length === 0) {
        quizOver();
    } else {
        getNewQuestion();
    }
}

function answersIndicator(){
    // No longer using a fixed indicator since questions can be repeated
    // Could be enhanced to show progress differently
    answersIndicatorContainer.innerHTML = '';
}

function updateAnswerIndicator(markType){
    // No longer needed with new system
}

function quizOver(){
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}

function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = totalQuestions;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/totalQuestions)*100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + totalQuestions;
    
    // Modifier le titre selon le mode
    const resultTitle = resultBox.querySelector("h1");
    if (isFailedQuestionsMode) {
        resultTitle.innerHTML = "Excellent ! Vous avez maîtrisé les questions difficiles !";
    } else {
        resultTitle.innerHTML = "Félicitations! Toutes les questions sont réussies!";
    }
}

function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    availableQuestions = [];
    correctlyAnsweredQuestions = [];
    selectedAnswers = [];
    isFailedQuestionsMode = false;
}

function tryAgain(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}

function showStatistics(){
    homeBox.classList.add("hide");
    document.querySelector(".statistics-box").classList.remove("hide");
    displayStatistics();
}

function displayStatistics(){
    const generalStats = quizStats.getGeneralStats();
    const mostFailed = quizStats.getMostFailedQuestions(10);
    
    // Afficher les statistiques générales
    document.querySelector(".general-stats").innerHTML = `
        <h3>📊 Statistiques Générales</h3>
        <div class="stats-grid">
            <div class="stat-item">
                <span class="stat-number">${generalStats.totalQuestions}</span>
                <span class="stat-label">Questions étudiées</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${generalStats.totalAttempts}</span>
                <span class="stat-label">nombre de tentatives</span>
            </div>
            <div class="stat-item">
                <span class="stat-number">${generalStats.globalSuccessRate}%</span>
                <span class="stat-label">Taux de réussite</span>
            </div>
        </div>
    `;
    
    // Afficher le classement des questions les plus échouées
    const failedQuestionsHtml = mostFailed.map((question, index) => `
        <div class="failed-question-item">
            <div class="rank">#${index + 1}</div>
            <div class="question-info">
                <div class="question-text">${question.questionText}</div>
                <div class="question-stats">
                    <span class="error-rate">${question.errorRate}% d'erreurs</span>
                    <span class="attempts">(${question.totalAttempts} tentatives)</span>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelector(".failed-questions-list").innerHTML = 
        mostFailed.length > 0 ? failedQuestionsHtml : '<p>Aucune donnée disponible. Commencez le quiz pour voir les statistiques !</p>';
    
    // Afficher ou cacher le bouton de rattrapage
    const retryButton = document.querySelector(".retry-failed-btn");
    if (mostFailed.length > 0) {
        retryButton.style.display = "inline-block";
    } else {
        retryButton.style.display = "none";
    }
}

function goToHomeFromStats(){
    document.querySelector(".statistics-box").classList.add("hide");
    homeBox.classList.remove("hide");
}

function resetAllStats(){
    if(confirm('Êtes-vous sûr de vouloir réinitialiser toutes les statistiques ? Cette action est irréversible.')) {
        quizStats.resetStats();
        displayStatistics();
        alert('Statistiques réinitialisées avec succès !');
    }
}

function exportStats(){
    quizStats.exportStats();
}

function startQuiz(){
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    hideNextButton(); // Hide next button at start
    getNewQuestion();
    answersIndicator();
}

function startFailedQuestionsQuiz(){
    const failedQuestionsData = quizStats.getFailedQuestionsData(10);
    
    if (failedQuestionsData.length === 0) {
        alert("Aucune question échouée trouvée ! Commencez d'abord le quiz principal.");
        return;
    }
    
    document.querySelector(".statistics-box").classList.add("hide");
    quizBox.classList.remove("hide");
    setFailedQuestions();
    hideNextButton(); // Hide next button at start
    getNewQuestion();
    answersIndicator();
}

window.onload = function (){
    homeBox.querySelector(".total-question").innerHTML = ""+quiz.length;
}

// ===== FONCTIONS METEOR DEFENSE =====

function showMeteorGame(){
    homeBox.classList.add("hide");
    document.querySelector(".meteor-game-box").classList.remove("hide");
    showLevelSelection();
}

function showLevelSelection(){
    document.querySelector(".level-selection").classList.remove("hide");
    document.querySelector(".meteor-session").classList.add("hide");
    document.querySelector(".meteor-results").classList.add("hide");
}

function goToHomeFromMeteor(){
    meteorGame.stopGame();
    document.querySelector(".meteor-game-box").classList.add("hide");
    homeBox.classList.remove("hide");
}

function startMeteorLevel(levelKey){
    if (!meteorGame.startLevel(levelKey)) {
        alert("Erreur : niveau non trouvé");
        return;
    }
    
    document.querySelector(".level-selection").classList.add("hide");
    document.querySelector(".meteor-session").classList.remove("hide");
    document.querySelector(".meteor-results").classList.add("hide");
}

function backToLevelSelection(){
    meteorGame.stopGame();
    showLevelSelection();
}

function restartMeteorLevel(){
    const currentLevelKey = Object.keys(meteorGameData).find(key => 
        meteorGameData[key] === meteorGame.currentLevel
    );
    
    document.querySelector(".meteor-results").classList.add("hide");
    startMeteorLevel(currentLevelKey);
}

function pauseGame(){
    meteorGame.pauseGame();
}

// ===== FONCTIONS FLASHCARDS =====

function showFlashcards(){
    homeBox.classList.add("hide");
    document.querySelector(".flashcards-box").classList.remove("hide");
    
    // S'assurer que seule la sélection des thèmes est visible
    document.querySelector(".theme-selection").classList.remove("hide");
    document.querySelector(".flashcard-session").classList.add("hide");
    document.querySelector(".flashcard-results").classList.add("hide");
}

function goToHomeFromFlashcards(){
    document.querySelector(".flashcards-box").classList.add("hide");
    homeBox.classList.remove("hide");
}

function showThemeSelection(){
    document.querySelector(".theme-selection").classList.remove("hide");
    document.querySelector(".flashcard-session").classList.add("hide");
    document.querySelector(".flashcard-results").classList.add("hide");
}

function startFlashcardSession(theme){
    if (!flashcardManager.startSession(theme)) {
        alert("Erreur : thème non trouvé");
        return;
    }
    
    document.querySelector(".theme-selection").classList.add("hide");
    document.querySelector(".flashcard-session").classList.remove("hide");
    document.querySelector(".flashcard-results").classList.add("hide");
    
    // Mettre à jour les informations de la session
    const themeData = flashcardData[theme];
    document.querySelector(".current-theme").textContent = themeData.title;
    
    // Afficher la première carte
    updateFlashcardDisplay();
    updateSessionProgress();
}

function updateFlashcardDisplay(){
    const currentCard = flashcardManager.getCurrentCard();
    
    if (!currentCard) {
        showFlashcardResults();
        return;
    }
    
    // Mettre à jour le contenu de la carte
    const frontText = document.querySelector(".flashcard-side.front .card-text");
    const backText = document.querySelector(".flashcard-side.back .card-text");
    
    frontText.textContent = currentCard.front;
    backText.textContent = currentCard.back;
    
    // Réinitialiser l'affichage de la carte (face avant)
    const flashcard = document.querySelector(".flashcard");
    flashcard.classList.remove("flipped");
    
    // Mettre à jour le statut des boutons
    updateFlashcardControls();
}

function updateSessionProgress(){
    const stats = flashcardManager.getSessionStats();
    const progressStats = document.querySelector(".progress-stats");
    
    progressStats.innerHTML = `
        <div class="progress-info">
            <span>Carte ${stats.currentIndex} / ${stats.totalCards}</span>
            <span>Maîtrisées: ${stats.masteredCards}</span>
            <span>Restantes: ${stats.remaining}</span>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${stats.progress}%"></div>
        </div>
    `;
}

function updateFlashcardControls(){
    // Masquer les boutons de contrôle si on est sur la face avant
    const controls = document.querySelector(".flashcard-controls");
    const flipBtn = document.querySelector(".flip-btn");
    
    if (flashcardManager.showingFront) {
        controls.style.opacity = "0.6";
        document.querySelector(".difficulty-btn.difficult").disabled = true;
        document.querySelector(".difficulty-btn.easy").disabled = true;
    } else {
        controls.style.opacity = "1";
        document.querySelector(".difficulty-btn.difficult").disabled = false;
        document.querySelector(".difficulty-btn.easy").disabled = false;
    }
}

function flipCurrentCard(){
    const flashcard = document.querySelector(".flashcard");
    const isShowingFront = flashcardManager.flipCard();
    
    if (isShowingFront) {
        flashcard.classList.remove("flipped");
    } else {
        flashcard.classList.add("flipped");
    }
    
    updateFlashcardControls();
}

function markCardAsUnderstood(){
    flashcardManager.markAsUnderstood();
    
    // Animation de succès
    const flashcard = document.querySelector(".flashcard");
    flashcard.classList.add("understood");
    
    setTimeout(() => {
        flashcard.classList.remove("understood");
        updateFlashcardDisplay();
        updateSessionProgress();
        
        // Vérifier si la session est terminée
        if (flashcardManager.isSessionComplete()) {
            showFlashcardResults();
        }
    }, 500);
}

function markCardAsDifficult(){
    flashcardManager.markAsDifficult();
    
    // Animation de difficulté
    const flashcard = document.querySelector(".flashcard");
    flashcard.classList.add("difficult");
    
    setTimeout(() => {
        flashcard.classList.remove("difficult");
        updateFlashcardDisplay();
        updateSessionProgress();
    }, 500);
}

function restartCurrentSession(){
    flashcardManager.restartWithDifficultCards();
    updateFlashcardDisplay();
    updateSessionProgress();
}

function shuffleCurrentSession(){
    flashcardManager.shuffleCards();
    updateFlashcardDisplay();
    updateSessionProgress();
}

function backToThemeSelection(){
    showThemeSelection();
}

function showFlashcardResults(){
    document.querySelector(".flashcard-session").classList.add("hide");
    document.querySelector(".flashcard-results").classList.remove("hide");
    
    // Mettre à jour les statistiques de résultats
    const stats = flashcardManager.getSessionStats();
    document.getElementById("session-total-cards").textContent = stats.totalCards;
    document.getElementById("session-mastered-cards").textContent = stats.masteredCards;
    
    const successRate = stats.totalCards > 0 ? Math.round((stats.masteredCards / stats.totalCards) * 100) : 0;
    document.getElementById("session-success-rate").textContent = successRate + "%";
}

function restartCurrentTheme(){
    const currentTheme = flashcardManager.currentTheme;
    startFlashcardSession(currentTheme);
}