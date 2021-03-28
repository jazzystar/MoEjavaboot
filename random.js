/* Now use a randomization javascript function to set up a random number generator that takes a number range that a user enters 
and gives back a random number when they click a button (for example, if I enter 1 and I00 as the range, I should get a random number 
from 1 to 100 back in a way that is visible to me from a browser).  Indicate where a-d occur in your WDD.*/

//<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

const htmlBtn = document.getElementById('HTMLBTN');
htmlBtn.addEventListener('click', htmlChange);
const cssBtn = document.getElementById('CSSBTN');
cssBtn.addEventListener('click', cssChange);
const randNum = document.getElementById('randNumber');
const randNumBtn = document.getElementById('RANDBTN');
randNumBtn.addEventListener('click', randNumGen);
const feedBtn = document.getElementById('FEEDBTN');
feedBtn.addEventListener('click', feedBack);
const form = document.getElementById("formCtrl");

var clicked = false;

function cssChange(){
    if(!clicked){
        cssBtn.style.backgroundColor = "#090";
        clicked = true;
    }
    else if(clicked){
        cssBtn.style.backgroundColor = "#00ff00";
        clicked = false;
    }
}

function htmlChange(){
    //document.write("This is working");
    if(!clicked){
        htmlBtn.textContent = "This has changed!";
    } else{
        htmlBtn.textContent = "Hit me!"
    }

}

function randNumGen(){
    var rand = parseInt(Math.random() * 100);
    
        if(rand <= 25){
            randNum.textContent = "On the lower side: " + rand;
        }
        else if(rand >= 36 && rand <= 68){
            randNum.textContent = "Not bad: " + rand;
        }
        else if(rand == 69){
            randNum.textContent = "Nice: " + rand;
        }
        else if(rand >= 100 && rand >= 70){
            randNum.textContent = "Pretty good: " + rand;
        }
}

function feedBack(){
    alert("Then you should eat it.");
    window.location.reload();
}
//document.getElementById("card1name").innerHTML = parseInt(Math.random()*10);