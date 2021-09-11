var randomNumber =Math.floor(Math.random()*6)+1;

var randomDice="dice"+randomNumber+".png";
var imageSource="DOM/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice);
var randomNumber1 =Math.floor(Math.random()*6)+1;

var randomDice1="dice"+randomNumber1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice1);
if(randomDice>randomDice1){
    document.querySelector("h1").innerHTML="Player 1 Wins";

}
else if(randomDice1==randomDice){
    document.querySelector("h1").innerHTML="Draw";
}
else{
     document.querySelector("h1").innerHTML="Player 2 Wins";
}