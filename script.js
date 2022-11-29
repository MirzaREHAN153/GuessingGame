'use strict';
/*********************************************************************************************************************
******************************************************************************************************************** 
                                        WHAT IS DOM???      
******************************************************************************************************************** 
**********************************************************************************************************************/

/* DOM is a structured representation of HTML documents and it allows JavaScript to access HTML and CSS elements to
   manipulate them */
   let randNum= Math.trunc((Math.random()*20)+1);
   let count=20;

let highScore=0;

   
   

document.querySelector(".check").addEventListener('click',function(){

   const guess=document.querySelector(".guess").value;
// const val=document.querySelector(".guess").value;

if (!guess){
document.querySelector(".message").textContent="Please Enter any number";
count--;
document.querySelector(".score").textContent=count;

}
else if(guess==randNum){
document.querySelector("body").style.backgroundColor="#60b347";
document.querySelector(".number").style.width="30rem";

   document.querySelector(".message").textContent="Congratulations You Won!!!";
    document.querySelector(".number").textContent=randNum;
    
    if (count>highScore){
      highScore=count;
      document.querySelector(".highscore").textContent=highScore;


    }



}
else if (guess>randNum){
if(count>1){
   document.querySelector(".message").textContent="Too high";
count--;
document.querySelector(".score").textContent=count;
}
else {
   document.querySelector(".message").textContent="You lost";
   count=0;
   document.querySelector(".score").textContent=0;


}
}
else if (guess<randNum){
   if(count>1){
   document.querySelector(".message").textContent="Too Low";
   count--;
   document.querySelector(".score").textContent=count;
   }
   else{
      document.querySelector(".message").textContent="You lost";
      count=0;
      document.querySelector(".score").textContent=0;
      
   }
}

})

document.querySelector(".again").addEventListener("click",function(){

let score=20;
randNum=Math.trunc((Math.random()*20)+1);
document.querySelector(".number").textContent="?";
document.querySelector("body").style.backgroundColor="#222";
document.querySelector(".number").style.width="15rem";
document.querySelector(".highscore").textContent=highScore;
document.querySelector(".score").textContent=score;
document.querySelector(".guess").value="";
document.querySelector(".message").textContent="Start Guessing...";


})