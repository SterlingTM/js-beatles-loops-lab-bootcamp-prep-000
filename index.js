const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

<<<<<<< HEAD
function johnLennonFacts(facts) {
   var n = 0;
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;  
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    (num++);
  } while (num < 15); {
=======

function iLoveTheBeatles(x) {
  var array = [];
  do {
    array.push[x]("I love the Beatles!");
    (x++);
  } while (x < 15); {
>>>>>>> 02a45a6cbeeb511a331aae082bf919415203533a
    
  }
  return array;
}

