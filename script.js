$(document).ready(function() {

  var player1Turn = true;
  var gameOver = false;
var $turn = $("h2");
console.log(player1Turn)

  $("#reset").click(function(){

    $("td").removeClass("X").html(" ")
    $("td").removeClass("O").html(" ")
  });

  $("td").click(function(){
  if (player1Turn == true)
  {
  $(this).addClass("X").html("<span> X </span>");
  player1Turn = false;
  console.log(player1Turn)
  $("h2").html("It is O's turn");
  }
  else if (player1Turn == false)
  {
  $(this).addClass("O").html("<span> O </span>");
  player1Turn = true;
  $("h2").html("It is X's turn");
  }

});
});
