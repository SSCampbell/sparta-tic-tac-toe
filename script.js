$(document).ready(function() {

  var player1Turn = true;
  var gameOver = false;
  var x = 3;
var $turn = $("h2");
var $0 = $('[data-num~="0"]');
var $1 = $('[data-num~="1"]')
var $2 = $('[data-num~="2"]')
var $3 = $('[data-num~="3"]')
var $4 = $('[data-num~="4"]')
var $5 = $('[data-test~="5"]')
var $6 = $('[data-test~="6"]')
var $7 = $('[data-test~="7"]')
var $8 = $('[data-test~="8"]')



// if (gameOver == false)
if ($0.html() !== "X" && $1.html() !== "X" && $2.html() !== "X"){
console.log(player1Turn)

  $("#reset").click(function(){

    $("td").removeClass("X").html(" ")
    $("td").removeClass("O").html(" ")
  });
////////////////////////////////////////////////
  $("td").click(function(){
  if (player1Turn == true)
  {
  // checkWin();
  $(this).addClass("X").html("X");
  player1Turn = false;
  console.log(player1Turn)
  $("h2").html("It is O's turn");
  }
  else if (player1Turn == false)
  {
    // checkWin();
  $(this).addClass("O").html("O");
  player1Turn = true;
  $("h2").html("It is X's turn");
  }

  // function checkWin(){
    //{
      // gameOver = true;
    //}
  // }
});

}
else {
  console.log("TESTING")
}
console.log($0)
console.log($1)
console.log($2)

// if (gameOver == true)
// {
//   console.log("TESTING")
// }



});
