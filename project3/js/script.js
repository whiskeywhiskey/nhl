var questions, handle;
let counter = 0;
let inARow = 0;
let inARowC = 0;
let e;
let score = 0;
let period = 0;
let time = null;
let startTime = 15;
let pKillCounter = 0;
let pKillNumber = 2;
let answersCorrect = 0;
let pens = 0;
let hts = 0;
let song = 0;
let computerScore = 0;
let ppgN = 0;
let shgN = 0;
let questionNumber = 0;
let intermissionBool = true;
let easySB = false;
let computerModeE = false;
let computerModeM = false;
let computerModeH = false;
let hardSB = false;


buttonPushSound = document.getElementById('buttonPushSound');
correctSound = document.getElementById('correctSound');
incorrectSound = document.getElementById('incorrectSound');
tick = document.getElementById('tick');
whistle = document.getElementById('whistle');
hockeyStop = document.getElementById('hockeyStop');
homeSong = document.getElementById('homeSong');
loadSounds();
homePageStart();


homeSong.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

correctSound.addEventListener("ended", function () {
    this.load();
});

incorrectSound.addEventListener("ended", function () {
    this.load();
});

whistle.addEventListener("ended", function () {
    this.load();
});

hockeyStop.addEventListener("ended", function () {
    this.load();
});



function loadSounds() {
    tick.load();
    homeSong.load();
    buttonPushSound.load();
    correctSound.load();
    incorrectSound.load();
    whistle.load();
    hockeyStop.load();
}
function homeSongPlay() {
    if (song < 1) {
        homeSong.play();
    }
}
function buttonPushSoundPlay() {
    buttonPushSound.play();
}
function correctSoundgPlay() {
    correctSound.play();
}
function incorrectSoundPlay() {
    incorrectSound.play();
}
function tickPlay() {
    tick.load();
    tick.play();
}
function whistlePlay() {
    whistle.play();
}
function hockeyStopPlay() {
    hockeyStop.play();
}


function resetGame() {

    counter = 0;
    inARow = 0;
    inARowC = 0;
    score = 0;
    period = 0;
    time = null;
    startTime = 15;
    pKillCounter = 0;
    pKillNumber = 2;
    answersCorrect = 0;
    homeSong.volume = 1;
    computerScore = 0;
    pens = 0;
    hts = 0;
    ppgN = 0;
    shgN = 0;
    questionNumber = 0;
    intermissionBool = true;

    gameShow23();

    function gameShow23() {
        var xhr = new XMLHttpRequest();
        if (easySB) {
            xhr.open('GET', 'questionsE.json', true);
        }
        if (hardSB) {
            xhr.open('GET', 'questionsH.json', true);
        }

        if (computerModeE || computerModeM || computerModeH) {
            xhr.open('GET', 'questionsC.json', true);
        }

        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                questions = JSON.parse(xhr.responseText);
                questions = questions.trivia;
            }
        }
        xhr.send();

    }

}

//Home page stuff**********************************************************************************
function homePageStart() {
    let start_home = document.getElementById('start');
    let options = document.getElementById('options');
    optionsModal = document.getElementById('optionsModal');

    options.addEventListener('click', function () {
        optionsModal.click();
    });

    start_home.addEventListener('click', function () {
        buttonPushSoundPlay();
        selectPageLoad();
        if (song < 1) {
            homeSongPlay();
        }
    });


    function selectPageLoad() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/select.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }
            selectPage();
        }
        xhr.send();

    }
}

//Select page stuff**********************************************************************************
function selectPage() {

    let home_start = document.getElementById('home');
    let easyS = document.getElementById('easyS');
    let hardS = document.getElementById('hardS');
    let easyC = document.getElementById('easyC');
    let mediumC = document.getElementById('mediumC');
    let hardC = document.getElementById('hardC');

    home_start.addEventListener('click', function () {
        buttonPushSoundPlay();
        homePage();
    });

    easyS.addEventListener('click', function () {
        buttonPushSoundPlay();
        instructionsSingle();
        easySB = true;
        hardSB = false;
        computerModeE = false;
        computerModeM = false;
        computerModeH = false;
    });

    hardS.addEventListener('click', function () {
        buttonPushSoundPlay();
        instructionsSingle();
        easySB = false;
        hardSB = true;
        computerModeE = false;
        computerModeM = false;
        computerModeH = false;
    });

    easyC.addEventListener('click', function () {
        buttonPushSoundPlay();
        instructionsComputer();
        easySB = false;
        hardSB = false;
        computerModeE = true;
        computerModeM = false;
        computerModeH = false;
    });

    mediumC.addEventListener('click', function () {
        buttonPushSoundPlay();
        instructionsComputer();
        easySB = false;
        hardSB = false;
        computerModeE = false;
        computerModeM = true;
        computerModeH = false;
    });

    hardC.addEventListener('click', function () {
        buttonPushSoundPlay();
        instructionsComputer();
        easySB = false;
        hardSB = false;
        computerModeE = false;
        computerModeM = false;
        computerModeH = true;
    });


    function instructionsSingle() {

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/instructionsSingle.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let homeP = document.getElementById('changeMe');
                homeP.innerHTML = xhr.responseText;
            }
            singleInstructionsPage();
        }
        xhr.send();
    }

    function instructionsComputer() {

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/instructionsComputer.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let homeP = document.getElementById('changeMe');
                homeP.innerHTML = xhr.responseText;
            }
            computerInstructionsPage();
        }
        xhr.send();
    }

    function homePage() {

        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'index.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let homeP = document.getElementById('changeMe');
                homeP.innerHTML = xhr.responseText;
            }
            homePageStart();
        }
        xhr.send();
    }
}


//Single player instruction page stuff***************************************************************************
function singleInstructionsPage() {
    resetGame();
    let go = document.getElementById('Go');

    go.addEventListener('click', function () {
        buttonPushSoundPlay();
        selectPage();
        homeSong.volume = 0.2;
    });


    function selectPage() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/gameSingle.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }
            singlePlayPage();
        }
        xhr.send();

    }
}

//Computer player instruction page stuff***************************************************************************
function computerInstructionsPage() {
    resetGame();
    let go = document.getElementById('Go');

    go.addEventListener('click', function () {
        buttonPushSoundPlay();
        selectPage();
        homeSong.volume = 0.2;
    });


    function selectPage() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/gameComputer.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }
            computerPlayPage();
        }
        xhr.send();

    }
}


//Single play page stuff***************************************************************************
function singlePlayPage() {
    home = document.getElementById('home');
    questionText = document.getElementById('questionArea');
    periodText = document.getElementById('period');
    scoreText = document.getElementById('score');
    timeText = document.getElementById('time');
    a1 = document.getElementById('a1');
    a2 = document.getElementById('a2');
    a3 = document.getElementById('a3');
    a4 = document.getElementById('a4');
    modal = document.getElementById('modal');
    modalText = document.getElementById('modalText');
    closeMod = document.getElementById('closeMod');
    diff = document.getElementById('diff');
    qn = document.getElementById('numberOfQuestion');
    period++;
    time = startTime;
    scoreText.innerHTML = score;
    periodText.innerHTML = period;
    timeText.innerHTML = time;
    setDifficulty();
    //Timer stuff*****************************************************
    handle = setInterval(timerSet, 1000)
    function timerSet() {
        penaltyKillCheck();

        if (time <= 10) {
            document.getElementById('time').style.color = "red";
        }
        if (time <= 5) {
            document.getElementById('time').style.fontWeight = 900;
        }
        if (time < 6) {
            tickPlay();
        }
        timeText.innerHTML = time;
    }

    function setDifficulty() {
        if (easySB) {
            diff.innerHTML = "Easy"
        }
        else if (hardSB) {
            diff.innerHTML = "Hard"
        }
    }

    //Click Events*****************************************************
    home.addEventListener('click', function () {
        buttonPushSoundPlay();
        home2();
    });

    a1.addEventListener('click', function () {
        e = "a1";
        checkAnswer();
    });
    a2.addEventListener('click', function () {
        e = "a2";
        checkAnswer();
    });
    a3.addEventListener('click', function () {
        e = "a3";
        checkAnswer();
    });
    a4.addEventListener('click', function () {
        e = "a4";
        checkAnswer();
    });

    keepGoing();

    //Laod questions/answers*****************************************************
    function keepGoing() {
        if (!intermissionBool) {
            setTimeout(gg, 300);
        }
        else if (intermissionBool) {
            gg();
            intermissionBool = false;
        }

        function gg() {
            questionNumber++;
            qn.innerHTML = questionNumber;
            questionText.style.backgroundColor = "#ffffff";
            scoreText.style.color = "black"
            scoreText.style.fontWeight = "normal";
            scoreText.style.fontSize = "1em";
            rNum = Math.floor(Math.random() * questions.length);
            questionText.innerHTML = questions[rNum].question;
            a1.innerHTML = questions[rNum].a1;
            a2.innerHTML = questions[rNum].a2;
            a3.innerHTML = questions[rNum].a3;
            a4.innerHTML = questions[rNum].a4;
        }
    }

    //Check answer*****************************************************
    function checkAnswer() {
        if (e == questions[rNum].correctA) {
            answersCorrect++;
            counter++;
            inARow++;
            score++;
            tick.pause();
            correctSoundgPlay();
            scoreText.innerHTML = score;
            questions.splice(rNum, 1);
            questionText.style.backgroundColor = "#3bee59";
            scoreText.style.fontWeight = "bold";
            scoreText.style.fontSize = "1.4em";
            scoreText.style.color = "green"
            hatTrick();
        }
        else if (e != questions[rNum].correctA) {
            counter++;
            incorrectSoundPlay();
            tick.pause();
            questions.splice(rNum, 1);
            inARow = 0;
            questionText.style.backgroundColor = "red";
        }
        intermission();
        time = startTime;
        timeText.innerHTML = time;
        document.getElementById('time').style.color = "black";
    }

    function hatTrick() {
        if (inARow == 3) {
            score++;
            hts++;
            scoreText.innerHTML = score;
            inARow = 0;
        }
    }

    function penaltyKillCheck() {
        if (time == 0 && startTime == 15) {
            startTime = 10;
            e = "a" + Math.floor((Math.random() * 15) + 1);
            if (e == questions[rNum].correctA) {
                shgN++;
            }
            checkAnswer();
            pens++;
            closeMod.click();
            if (counter != 10 && counter != 20 && counter != 30) {
                whistlePlay();
                modal.click();
                modalText.innerHTML = "You have a penalty to kill! Hurry Time is ticking!";
            }
        }

        if (time == 0 && startTime == 10) {
            e = "a" + Math.floor((Math.random() * 15) + 1);
            if (e == questions[rNum].correctA) {
                shgN++;
            }
            checkAnswer();
            pens++;
            pKillNumber = pKillNumber + 2;
            closeMod.click();
            if (counter != 10 && counter != 20 && counter != 30) {
                whistlePlay();
                modal.click();
                modalText.innerHTML = "You have an additional penalty to kill! Hurry Time is ticking!";
            }
        }

        if (time > 0) {
            time--;
        }
    }


    function penaltyKill() {
        if (pKillCounter == pKillNumber) {
            startTime = 15;
            pKillCounter = 0;
            pKillNumber = 2;
            time = startTime;
            timeText.innerHTML = time;
        }
        else if (pKillCounter < pKillNumber && startTime == 10) {
            pKillCounter++;
        }
    }


    function intermission() {
        if (counter == 10) {
            setTimeout(now, 500);
            function now() {
                homeSong.volume = 0.8;
                closeMod.click();
                hockeyStopPlay();
                showIntermission();
            }
        }

        if (counter == 20) {
            setTimeout(now1, 500);
            function now1() {
                homeSong.volume = 0.8;
                closeMod.click();
                hockeyStopPlay();
                showIntermission();
            }
        }

        if (counter == 30) {
            setTimeout(now2, 500);
            function now2() {
                homeSong.volume = 0.9;
                closeMod.click();
                hockeyStopPlay();
                gameOver();
            }
        }
        else if (counter != 10 && counter != 20 && counter != 30) {
            penaltyKill();
            keepGoing();
        }
    }

    function showIntermission() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/intermission.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }
            homeI = document.getElementById('homeI');
            continueI = document.getElementById('continueI');
            scoreI = document.getElementById('scoreI');
            periodI = document.getElementById('periodI');
            intermissionBool = true;

            homeI.addEventListener('click', function () {
                buttonPushSoundPlay();
                home2();
            });

            continueI.addEventListener('click', function () {
                buttonPushSoundPlay();
                homeSong.volume = 0.2;
                reloadPage();
            });
            clearInterval(handle);
            scoreI.innerHTML = score;
            periodI.innerHTML = period;

        }
        xhr.send();

        function reloadPage() {

            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'pages/gameSingle.html', true);
            xhr.responseType = 'text';

            xhr.onload = function () {
                if (xhr.status === 200) {
                    let selectP = document.getElementById('changeMe');
                    selectP.innerHTML = xhr.responseText;
                }
                clearInterval(handle);
                singlePlayPage();
            }
            xhr.send();
        }
    }

    function gameOver() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/gameOver.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }

            homeF = document.getElementById('homeF');
            scoreF = document.getElementById('scoreF');
            correct = document.getElementById('correct');
            ht = document.getElementById('ht');
            pen = document.getElementById('pen');
            shg = document.getElementById('shg');
            superText = document.getElementById('inspiration');

            scoreF.innerHTML = score;
            correct.innerHTML = " " + answersCorrect;
            pen.innerHTML = pens;
            ht.innerHTML = hts;
            shg.innerHTML = shgN;


            if (score < 10) {
                superText.innerHTML = "Nice try!!!"
            }
            else if (score < 20) {
                superText.innerHTML = "Awesome job!!!"
            }
            else if (score < 30) {
                superText.innerHTML = "You are killing it!!!"
            }
            else if (score < 40) {
                superText.innerHTML = "You are good at this!!!"
            }
            else if (score == 40) {
                superText.innerHTML = "You are too good!!!"
            }

            homeF.addEventListener('click', function () {
                buttonPushSoundPlay();
                home2();
            });
            clearInterval(handle);
        }
        xhr.send();
    }

}

//Computer play page stuff***************************************************************************
function computerPlayPage() {
    home = document.getElementById('home');
    questionText = document.getElementById('questionArea');
    periodText = document.getElementById('period');
    scoreText = document.getElementById('score');
    computerScoreText = document.getElementById('scoreC');
    timeText = document.getElementById('time');
    a1 = document.getElementById('a1');
    a2 = document.getElementById('a2');
    a3 = document.getElementById('a3');
    a4 = document.getElementById('a4');
    modal = document.getElementById('modal');
    modalText = document.getElementById('modalText');
    closeMod = document.getElementById('closeMod');
    qn = document.getElementById('numberOfQuestion');
    period++;
    computerScoreText.innerHTML = computerScore;
    time = startTime;
    scoreText.innerHTML = score;
    periodText.innerHTML = period;
    timeText.innerHTML = time;
    setDifficulty();
    //Timer stuff*****************************************************
    handle = setInterval(timerSet, 1000)
    function timerSet() {
        penaltyKillCheck();

        if (time <= 10) {
            document.getElementById('time').style.color = "red";
        }
        if (time <= 5) {
            document.getElementById('time').style.fontWeight = 900;
        }
        if (time < 6) {
            tickPlay();
        }
        timeText.innerHTML = time;
    }

    function setDifficulty() {
        if (computerModeE) {
            diff.innerHTML = "Easy"
        }
        else if (computerModeM) {
            diff.innerHTML = "Medium"
        }
        else if (computerModeH) {
            diff.innerHTML = "Hard"
        }
    }

    //Click Events*****************************************************
    home.addEventListener('click', function () {
        buttonPushSoundPlay();
        home2();
    });

    a1.addEventListener('click', function () {
        e = "a1";
        checkAnswer();
    });
    a2.addEventListener('click', function () {
        e = "a2";
        checkAnswer();
    });
    a3.addEventListener('click', function () {
        e = "a3";
        checkAnswer();
    });
    a4.addEventListener('click', function () {
        e = "a4";
        checkAnswer();
    });

    keepGoing();

    //Laod questions/answers*****************************************************
    function keepGoing() {
        if (!intermissionBool) {
            setTimeout(gg, 300);
        }
        else if (intermissionBool) {
            gg();
            intermissionBool = false;
        }

        function gg() {
            questionNumber++;
            qn.innerHTML = questionNumber;
            questionText.style.backgroundColor = "#ffffff";
            scoreText.style.color = "black"
            scoreText.style.fontWeight = "normal";
            scoreText.style.fontSize = "1em";
            computerScoreText.style.color = "black"
            computerScoreText.style.fontWeight = "normal";
            computerScoreText.style.fontSize = "1em";
            rNum = Math.floor(Math.random() * questions.length);
            questionText.innerHTML = questions[rNum].question;
            a1.innerHTML = questions[rNum].a1;
            a2.innerHTML = questions[rNum].a2;
            a3.innerHTML = questions[rNum].a3;
            a4.innerHTML = questions[rNum].a4;
        }
    }

    //Check answer*****************************************************
    function checkAnswer() {
        if (e == questions[rNum].correctA) {
            answersCorrect++;
            counter++;
            inARow++;
            score++;
            tick.pause();
            correctSoundgPlay();
            scoreText.innerHTML = score;
            questions.splice(rNum, 1);
            questionText.style.backgroundColor = "#3bee59";
            scoreText.style.fontWeight = "bold";
            scoreText.style.fontSize = "1.4em";
            scoreText.style.color = "green"
        }
        else if (e != questions[rNum].correctA) {
            counter++;
            incorrectSoundPlay();
            tick.pause();
            questions.splice(rNum, 1);
            inARow = 0;
            questionText.style.backgroundColor = "red";
        }
        hatTrick();
        computerPlay();
        intermission();
        time = startTime;
        timeText.innerHTML = time;
        document.getElementById('time').style.color = "black";
    }

    function hatTrick() {
        if (inARow == 3) {
            score++;
            hts++;
            scoreText.innerHTML = score;
            inARow = 0;
        }
    }

    function penaltyKillCheck() {
        if (time > 0) {
            time--;
        }

        if (time == 0 && startTime == 10) {

            e = "a" + Math.floor((Math.random() * 15) + 1);
            if (e == questions[rNum].correctA) {
                shgN++;
            }
            checkAnswer();
            pens++;
            pKillNumber = pKillNumber + 2;
            closeMod.click();
            if (counter != 10 && counter != 20 && counter != 30) {
                whistlePlay();
                modal.click();
                modalText.innerHTML = "You have an additional penalty to kill! Hurry Time is ticking!";
            }
        }

        else if (time == 0 && startTime == 15) {
            startTime = 10;
            e = "a" + Math.floor((Math.random() * 15) + 1);
            if (e == questions[rNum].correctA) {
                shgN++;
            }
            checkAnswer();
            pens++;
            closeMod.click();
            if (counter != 10 && counter != 20 && counter != 30) {
                whistlePlay();
                modal.click();
                modalText.innerHTML = "You have a penalty to kill! Hurry Time is ticking!";
            }
        }
    }


    function penaltyKill() {
        if (pKillCounter == pKillNumber) {
            startTime = 15;
            pKillCounter = 0;
            pKillNumber = 2;
            time = startTime;
            timeText.innerHTML = time;
        }
        else if (pKillCounter < pKillNumber && startTime == 10) {
            pKillCounter++;
        }
    }


    function intermission() {
        if (counter == 10) {
            setTimeout(now, 500);
            function now() {
                homeSong.volume = 0.8;
                closeMod.click();
                hockeyStopPlay();
                showIntermission();
            }
        }

        if (counter == 20) {
            setTimeout(now1, 500);
            function now1() {
                homeSong.volume = 0.8;
                closeMod.click();
                hockeyStopPlay();
                showIntermission();
            }
        }

        if (counter == 30) {
            setTimeout(now2, 500);
            function now2() {
                homeSong.volume = 0.9;
                closeMod.click();
                hockeyStopPlay();
                gameOver();
            }
        }
        else if (counter != 10 && counter != 20 && counter != 30) {
            penaltyKill();
            keepGoing();
        }
    }

    function computerPlay() {
        computerRandomNumber = Math.floor((Math.random() * 4) + 1);
        if (computerModeE) {
            if (computerRandomNumber == 4) {
                inARowC++;
                computerScore++;
                computerScoreText.innerHTML = computerScore;
                checkHT();
            }
            else {
                inARowC == 0;
            }
        }
        if (computerModeM) {
            if (computerRandomNumber == 4 || computerRandomNumber == 3) {
                inARowC++;
                computerScore++;
                computerScoreText.innerHTML = computerScore;
                checkHT();
            }

            else {
                inARowC == 0;
            }
        }
        if (computerModeH) {
            if (computerRandomNumber == 4 || computerRandomNumber == 3 || computerRandomNumber == 2) {
                inARowC++;
                computerScore++;
                computerScoreText.innerHTML = computerScore;
                checkHT();
            }

            else {
                inARowC == 0;
            }
        }
        function checkHT() {
            computerScoreText.style.fontWeight = "bold";
            computerScoreText.style.fontSize = "1.4em";
            computerScoreText.style.color = "red"
            if (inARowC == 3) {
                computerScore++;
                computerScoreText.innerHTML = computerScore;
                inARowC == 0;
            }
        }

    }

    function showIntermission() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/intermissionC.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }
            homeI = document.getElementById('homeI');
            continueI = document.getElementById('continueI');
            scoreI = document.getElementById('scoreI');
            scoreIC = document.getElementById('scoreIC');
            periodI = document.getElementById('periodI');
            intermissionBool = true;

            homeI.addEventListener('click', function () {
                buttonPushSoundPlay();
                home2();
            });

            continueI.addEventListener('click', function () {
                buttonPushSoundPlay();
                homeSong.volume = 0.2;
                reloadPage();
            });
            clearInterval(handle);
            scoreIC.innerHTML = computerScore;
            scoreI.innerHTML = score;
            periodI.innerHTML = period;

        }
        xhr.send();

        function reloadPage() {

            var xhr = new XMLHttpRequest();

            xhr.open('GET', 'pages/gameComputer.html', true);
            xhr.responseType = 'text';

            xhr.onload = function () {
                if (xhr.status === 200) {
                    let selectP = document.getElementById('changeMe');
                    selectP.innerHTML = xhr.responseText;
                }
                clearInterval(handle);
                computerPlayPage();
            }
            xhr.send();
        }
    }

    function gameOver() {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'pages/gameOverC.html', true);
        xhr.responseType = 'text';

        xhr.onload = function () {
            if (xhr.status === 200) {
                let selectP = document.getElementById('changeMe');
                selectP.innerHTML = xhr.responseText;
            }

            homeF = document.getElementById('homeF');
            scoreF = document.getElementById('scoreF');
            correct = document.getElementById('correct');
            ht = document.getElementById('ht');
            pen = document.getElementById('pen');
            ppg = document.getElementById('ppg');
            shg = document.getElementById('shg');
            cS = document.getElementById('scoreFC');
            superText = document.getElementById('inspiration');
            scoreF.innerHTML = score;
            correct.innerHTML = " " + answersCorrect;
            pen.innerHTML = pens;
            ht.innerHTML = hts;
            ppg.innerHTML = ppgN;
            shg.innerHTML = shgN;
            cS.innerHTML = computerScore;

            if (computerScore > score) {
                superText.innerHTML = "Nice try!!!"
                cS.style.color = "green";
                scoreF.style.color = "red";
            }
            else if (computerScore < score) {
                superText.innerHTML = "Awesome job!!!"
                cS.style.color = "red";
                scoreF.style.color = "green";
            }
            else if (computerScore == score) {
                superText.innerHTML = "So close!!!"
                cS.style.color = "black";
                scoreF.style.color = "black";
            }

            homeF.addEventListener('click', function () {
                buttonPushSoundPlay();
                home2();
            });
            clearInterval(handle);
        }
        xhr.send();
    }

}

function home2() {
    homeSong.volume = 1;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'index.html', true);
    xhr.responseType = 'text';

    xhr.onload = function () {
        if (xhr.status === 200) {
            let selectP = document.getElementById('changeMe');
            selectP.innerHTML = xhr.responseText;
        }
        clearInterval(handle);
        homePageStart();
    }
    xhr.send();

}