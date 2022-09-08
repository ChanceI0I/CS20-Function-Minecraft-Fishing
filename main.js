// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', CatchFish);

//Creat object to store the information of different character
const steve = [
  {type : "Cod", P : 70},            //P for percentage %
  {type : "Salmon", P : 20},
  {type : "Tropical", P : 5},
  {type : "Puffer", P : 5},
]

const alex = [     
  {type : "Tropical", P : 30},
  {type : "Salmon", P : 10},
  {type : "Puffer", P : 50},
  {type : "Cod", P : 10},     
]

const villager = [
  {type : "Salmon", P : 25},
  {type : "Puffer", P : 25},
  {type : "Tropical", P : 25},
  {type : "Cod", P : 25},   
]

function CatchFish() {
  let randNum = Math.random()*100;  //Generate random number from 1 to 100
  let character = eval (charSelect.value);

  // charSelect.value = "steve" //Test

  // Decide which fish (The array is already sorted)
  if (randNum < character[0].P){                                  
    CheckFish(character[0].type)
  } else if (randNum < character[1].P + character[0].P) {
    CheckFish(character[1].type)
  } else if (randNum < character[2].P + character[1].P + character[0].P) {
    CheckFish(character[2].type)
  } else {
    CheckFish(character[3].type)
  }

  //Check the fish and change the text and image on website 
  function CheckFish(FishKind) {
    if (FishKind === "Cod") {
      numCod ++
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (FishKind === "Salmon") {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-Salmon.png';
    } else if (FishKind === "Tropical") {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = 'img/Pufferfish.png';
    }
  }
}

// for (i=0;i<100;i++) {   //Test
//   CatchFish()
// }