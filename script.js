
// Variables to store score

var score=0;
var comp_score=0;

// Function to play win sound

function win(){

        var win= new Audio("sounds/win.wav");
        win.play()
}

// Function to play lose sound

function lose(){

        var lose=new Audio("sounds/lose.wav");
        lose.play();
}

// Function to play draw  sound

function draw(){

        var draw= new Audio("sounds/draw.wav");
        draw.play();
}

// function to get computer choice 

function get_comp_choice()
{
    return Math.floor(Math.random()*100)%3;
}

// function to display user score

function displayScore()
{

    score+=1
    document.getElementById('score').innerHTML="You:"+score;
    win();

    
}

// function to display computer score

function displayCompscore()

{

    comp_score+=1
    document.getElementById('compscore').innerHTML="computer:"+comp_score;
    lose();


}

// function to see outcome when user chooses rock

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

// function to see the outcome when user chooses paper

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


// function to see outcome when user chooses scissors

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