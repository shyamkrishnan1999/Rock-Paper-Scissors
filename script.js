
var score=0;
var comp_score=0;

function win(){

        var win= new Audio("sounds/win.wav");
        win.play()
}

function lose(){

        var lose=new Audio("sounds/lose.wav");
        lose.play();
}

function draw(){

        var draw= new Audio("sounds/draw.wav");
        draw.play();
}

function get_comp_choice()
{
    return Math.floor(Math.random()*100)%3;
}

function displayScore()
{

    score+=1
    document.getElementById('score').innerHTML="You:"+score;
    win();

    
}

function displayCompscore()

{

    comp_score+=1
    document.getElementById('compscore').innerHTML="computer:"+comp_score;
    lose();


}

function choiceRock()
{

    comp_choice=get_comp_choice();

    switch(comp_choice)
    {
        case 0: document.getElementById('user').innerHTML="User choose Rock";
                document.getElementById('computer').innerHTML="Computer choose Rock";
                document.getElementById('outcome').innerHTML="Tie";
                draw();

                break;

        case 1: document.getElementById('user').innerHTML="User choose Rock";
                document.getElementById('computer').innerHTML="Computer choose Paper";
                document.getElementById('outcome').innerHTML="Computer wins";
                displayCompscore();

                break;

        case 2: document.getElementById('user').innerHTML="User choose Rock";
                document.getElementById('computer').innerHTML="Computer choose Scissors";
                document.getElementById('outcome').innerHTML="User wins";
                displayScore();

                break;
     
    }
 
    
}

function choicePaper()
{

    comp_choice=get_comp_choice();

    switch(comp_choice)
    {
        case 0: document.getElementById('user').innerHTML="User choose Paper";
                document.getElementById('computer').innerHTML="Computer choose Rock";
                document.getElementById('outcome').innerHTML="User wins";
                displayScore();

                break;

        case 1: document.getElementById('user').innerHTML="User choose Paper";
                document.getElementById('computer').innerHTML="Computer choose Paper";
                document.getElementById('outcome').innerHTML="Tie";

                draw();

                break;

        case 2: document.getElementById('user').innerHTML="User choose Paper";
                document.getElementById('computer').innerHTML="Computer choose Scissors";
                document.getElementById('outcome').innerHTML="Computer wins";

                displayCompscore();

                break;
     
    }
 
    
}


function choiceScissors()
{

    comp_choice=get_comp_choice();

    switch(comp_choice)
    {
        case 0: document.getElementById('user').innerHTML="User choose Scissors";
                document.getElementById('computer').innerHTML="Computer choose Rock";
                document.getElementById('outcome').innerHTML="Computer wins";

                displayCompscore();

                break;

        case 1: document.getElementById('user').innerHTML="User choose Scissors";
                document.getElementById('computer').innerHTML="Computer choose Paper";
                document.getElementById('outcome').innerHTML="User wins";
                displayScore();


                break;

        case 2: document.getElementById('user').innerHTML="User choose Scissors";
                document.getElementById('computer').innerHTML="Computer choose Scissors";
                document.getElementById('outcome').innerHTML="Tie";

                draw();

                break;
     
    }
 
    
}