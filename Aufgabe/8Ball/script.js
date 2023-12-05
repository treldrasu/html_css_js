document.addEventListener("DOMContentLoaded", function () {
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["Nein", "Ja", "Ich denke nicht...", "Aber natürlich!", "Zweifellos", "nur in deinen Träumen."];

    function animate8Ball() {
        let ball = document.getElementById("8ball");
        setTimeout(() => {
            void ball.offsetWidth; // Trigger reflow to restart the animation
            ball.style.animation = 'shake 0.5s ease-in-out 2';
            ball.src = "magic8ballAnswer.png";
        }, 0);
        ball.style.animation = 'none';
    }
    
    magic8Ball.askQuestion = function (question) {
        let ball = document.getElementById("8ball");
        let answer = document.getElementById("answer");
        
        ball.src = "magic8ballQuestion.png";
        animate8Ball();

        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        answer.innerHTML = this.listOfAnswers[randomIndex];
        
        // Füge den Fade-In-Effekt nur beim Erscheinen hinzu
        if (answer.style.opacity === '0') {
            answer.style.transition = 'opacity 1s ease-in-out';
            answer.style.opacity = 1;
        }

        console.log(question);
        console.log(answer);
    };
    
    var onClick = function () {
        //reset
        document.getElementById("8ball").src = "magic8ballQuestion.png";
        document.getElementById("answer").style.transition = 'none';
        document.getElementById("answer").style.opacity = 0;

        setTimeout(function () {
            var question = prompt("STELLE EINE JA ODER NEIN FRAGE!");
            magic8Ball.askQuestion(question);
        }, 500);

    
    };
    document.getElementById("questionButton").addEventListener("click", onClick);
})





