function promptForPlayerName(playerone){

   playerone= prompt("Please enter your name");

   if(playerone.length >15){

       alert ("wow thats a long name");

   }

   return playerone;

}

function tryTwoPointShot(){

   var number1=Math.random();

   var number2=Math.random();

   if(number1>0.2&&number2>0.2){

   return true;

   }

   else {

      return false;

   }

}

function tryThreePointShot(){

   var number1=Math.random();

   var number2=Math.random();

   if(number1<=0.2||number2>=0.8){

   return true;

   }

   else {

      return false;

   }

}

function getShotString(name, points, shotgood){

   if (shotgood){

   return name+" attempted a "+points+" pointer. it was good";

   }

   else{

      return name+" attempted a "+points+" pointer. it was not good"; 

   }

}




function updateScore(splash,score,howmanypointstheshotwasfor){

   if (splash){

      return score + howmanypointstheshotwasfor;

      }

      else {

         return score;

      }

}




function isEndOfGame (score, theplayersname){

   if(score>=20){

      alert ("the game is over " +theplayersname+ " won");

      return true;

   }

   else {

   return   false;

   }
}