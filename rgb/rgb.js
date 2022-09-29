var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("msg");
var colors = generatecolor(6);
var squares = document.querySelectorAll(".square");
var picked = pickcolor();
var newColor = document.getElementById("newColor");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var h1 = document.querySelector("h1");
var hint = document.querySelector("#hint");
colorDisplay.textContent = picked;

for(var i = 0;i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

squares[i].addEventListener("click",function(){

	var clickedColor = this.style.backgroundColor;

	if(picked === clickedColor)
	{
		message.textContent = "Correct";
		allSquares();
		h1.style.backgroundColor = picked;



newColor.textContent = "Play Again?";
	}
	else
	{
		this.style.backgroundColor = "#232323";
		message.textContent = "Try again!";
	}
});
}
function pickcolor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function allSquares()
{
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = picked;
	}
}

newColor.addEventListener("click",function(){
	colors = generatecolor(6);
	picked = pickcolor();
	colorDisplay.textContent = picked;
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	newColor.textContent = "New colors";

});

function generatecolor(num)
{
	var arr = [];
	for(i =0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	"rgb(r, g, b)"
	return "rgb("+r+", "+g+", "+b+")";
}

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	colors = generatecolor(3);
	picked = pickcolor();
	colorDisplay.textContent = picked;
	for(i = 0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors = generatecolor(6);
	picked = pickcolor();
	colorDisplay.textContent = picked;
	for(i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});
hint.addEventListener("click",function(){
	alert("Welcome to color guessing game.This game is sponsored by Tuyyab Ul Bashar.You have to guess a colour which matches the rgb value .If you guess correctly you win the game.Otherwise you lose.");

});