/* Now use a randomization javascript function to set up a random number generator that takes a number range that a user enters 
and gives back a random number when they click a button (for example, if I enter 1 and I00 as the range, I should get a random number 
from 1 to 100 back in a way that is visible to me from a browser).  Indicate where a-d occur in your WDD.*/

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>


var randCssBtn = document.getElementById('HTMLBTN').innerHTML;
var randHtmlBtn = document.getElementById('CSSBTN').innerHTML;
var randomNum = 3;
var bgColor = document.getElementById('body').innerHTML;


randCssBtn.onclick = function () {
    changeCSS()
};

function changeCSS() {
    if (randomNum <= 3) {
        document.body.style.background = "#f3f3f3";
        randCssBtn.innerHTML.backgroundColor = "Blue";
        randHtmlBtn.innerHTML.backgroundColor = "Blue";
    }
    else if (randomNum < 3 && randomNum <= 6) {
        random.body.style.backgroundColor = "White";
        randCssBtn.style.backgroundColor = "DarkGreen";
        random.style.backgroundColor = "DarkGreen";
    }
    else {
        bgColor.body.style.backgroundColor = "Black";
        randCssBtn.style.backgroundColor = "PaleGreen";
        randHtmlBtn.style.backgroundColor = "PaleGreen";
    }
}
//document.getElementById("card1name").innerHTML = parseInt(Math.random()*10);