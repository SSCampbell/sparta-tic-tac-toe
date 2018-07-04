# Sparta Global Academy Homework -- Tic-Tac-Toe

## Project Review:

### In this project I had to implement a tic-tac-toe function to a basic game layout. Today the javaScript command that was revised was jQuery

## Project Download:  
### Download from the files created and transferred to GITHUB
### The repository was created on GITHUB and cloned to access from terminal  
### Used a JS file & HTML file

## Using JavaScript tools such as:
```JavaScript
$("td").click(function(){
if (player1Turn == true)
{
// checkWin();
$(this).addClass("X").html("X");
player1Turn = false;
console.log(player1Turn)
$("h2").html("It is O's turn");
}})
```

## To make the program respond to the user's choice, a jQuery feature that focused on when you user clicks on the table. Depending on the turn base it would be "X" for the player OR "O" for the other player. I used a .html() tag with the selected class to change the text output to the screen. The next part of the project was to create a winning function which checks if there is a winner. I  managed to assign the values of each box with the number it is assigned with, this would be helpful when I a selected the boxes that I will be checking. I could not link my function effectively so I will review my code and develop a better strategy for the expected outcome.
