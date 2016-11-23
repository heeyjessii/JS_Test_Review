//Jessica Lopez November 23, 2016 Javascript Test Review

var knight = "Arthur";
var maiden = "Morgan";
var monster = "Dragon";

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"];

var hero = {
  wizard : "Merlin",
  weapon : "Mace",
  power : 25
};

//function that has one parameter
function swordInTheStone(worthy){
  if (worthy == "Arthur"){
    console.log("We have found our King " + worthy)
  }
  else if(worthy == Bob) {
    console.log("We must keep searching, for" + worthy +" is unworthy")
  }
}

//invoke function and pass knight variable
swordInTheStone("Arthur");

//Function for King and Queen
function trueLove(king, queen){
  if(queen == "Guinevere" && king == "Arthur") {
    console.log("On this day, our" + king + " and" + queen + " shall rule happily ever after")
  }
  else if(queen == "Rebecca" && king == "Bob"){
    console.log("We must keep searching for true love must reign over Camelot")
  }
}

trueLove("Arthur", "Guinevere");

//function for Merlin and Monster
function epicBattle(wizard, enemy, power){
  if(power <= 15){
    console.log("Our " + wizard + " has fallen")
  }
  else if (power >= 16 && power <= 40){
    console.log("Our " + wizard + " has slain the " + enemy + "!")
  }
}

//invoke epicBattle and pass object's first key value, monster variable and the objects third key value
epicBattle("Merlin", "Dragon", "25");