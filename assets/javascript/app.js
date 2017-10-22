$(document).ready(function () {



    var gameStarted = false;//only used for isFirstClick
    var gameTime = 60;//60 seconds, this variable should be changing throughout execution

    var timerText = $('#timer-text');



   
    //recieving the choice, T/F, send the answer to the function....
    $('input').on('click', function () {

        //start the Timer, for the first question
        if (gameStarted) {
            startTimer();
        }


        console.log($(this).attr('data-choice')+' was chosen')
        startTimer();
        console.log('startTimer called')
        //pass answer into the game logic

    })







    //start Timer, ends with function that concludes game
    var startTimer = function(){
        window.setTimeout(function () {
            console.log('Timer FINISHED, 60 seconds');


        }, 60000);
        //var refreshIntervalId = setInterval(fname, 10000);

        ///* later */
        //clearInterval(refreshIntervalId);
        var refreshInterval = window.setInterval(function () {
            if(gameTime > -1){
                console.log(gameTime)
                gameTime--;
                updateTimer();
            }

            else {
                window.clearInterval(refreshInterval);
            }

        }, 1000);


        //conclude the game now that the time is up
        concludeGame();
    }


    //update the timer HTML
    var updateTimer = function(){
        var txt = 'TIME LEFT: ';
        timerText.html(txt+ gameTime+'s');
    }

    //this is the 
    var countTime = function () {
        gameTime--;

    }




    var concludeGame = function () {
        clearInterval();

    }





});