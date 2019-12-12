var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click on the start button
document.getElementById("start").onclick=function(){
    //if we are playing
    if( playing == true){
        location.reload();
    }else{
        playing = true;
        //if we are not playing
//        set score to 0
        score=0;
        hide("gameover");
        document.getElementById("scorevalue").innerHTML=score;
        //displaying the timeremaing box
       show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremaining").innerHTML=timeremaining;
       document.getElementById("start").innerHTML="Reset Game";
        
        startCountdown();
        genarateQA();
    }
}

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
    if(playing ==  true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){hide("correct");},1000);
            genarateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}
}
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
         document.getElementById("timeremaining").innerHTML=timeremaining;
        if(timeremaining == 0){//game over
            stopCountdown();
         
        show("gameover");
        document.getElementById("gameover").innerHTML="<p>Game over!</p><p>Your Score is " +score+ ".</p>";
       
        
       hide("timeremaining");
        hide("correct");
         hide("wrong");
        playing=false;
            document.getElementById("start").innerHTML="Start Game";
        }
    },1000);
}
function stopCountdown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}

function genarateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML=x + "x" + y;
    var correctPosition=1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML=correctAnswer;//fill one box with correct answer
    
    //fill other boxes with wrong answer
//    for(i=1; i<5; i++){
//        if( i != correctPositon) {
//             var wrongAnswer;// a wrong answer 
//            do{
//                wrongAnswer =(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
//                
//            }
//            while(wrongAnswer == correctAnswer);
//            document.getElementById("box"+i).innerHTML=wrongAnswer;
//             
//        }
//   }
//}
  
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

document.getElementById("box1").onclick=function(){
    if(playing ==  true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){hide("correct");},1000);
            genarateQA();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}





