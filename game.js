var userClickedPattern= [];
var buttonColors=["red", "blue", "green", "yellow"];
var gamePattern=[];
var started=false;
var level=0;

$(document).on('keydown', function(){
    if (!started){
        $('h1').text('Level'+level);
        nextSequence()
        started=true;
    }
})

$('button').on('click', function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
})
function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if (userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }

    } 
    else {
        playSound('wrong');
        $('body').addClass('game-over');
        $('h1').text('Game over. Press any key to re start');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
        
        startOver()
    }
}
function nextSequence(){
    userClickedPattern=[]
    level++;
    $('h1').text('Level'+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
}
function playSound(name){
    var audio=new Audio('sounds/'+name+'.mp3');
    audio.play();
}
function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
        $('#'+currentColor).removeClass('pressed');
    },100)
}

function startOver(){
    var level=0;
    var gamePattern=[];
    var started=false;
}