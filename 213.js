// initialize variables
var count = 0;   //where the game is
var steps = 0;   //1, 2, or 2
var game = [];  // numbers counted
var plaer = ""; //person whose turn it is

do {

	player = "you";
	steps = prompt("Starting at "+count+",  how many steps do you count (1-3)");
	count = counting(player,count,steps) ;
	player= "me";
	steps = 2;
	count = counting(player,count,steps) ;
}
while (count<21) ;

alert ("You win!");


function counting(player,current,steps) {
	game=[];
	for  (index=0;index<steps;index++)  {
		game[index]=current+index+1;
		}
		alert(player+" : "+game);
		current=parseInt(current)+parseInt(steps) ;
		return current;
	
}