let generatedNumber = document.getElementById("ia-number");
const btn = document.getElementById("roll-button");
const userInput = document.getElementById("user-number");
const selection = document.getElementById("selection");
let winner = document.getElementById("message");


let sum= 0

btn.addEventListener("click", function(){
    let userNumberInput = parseInt(userInput.value);
    
    if (userNumberInput < 0 || userNumberInput > 5 ){
        alert("Scrivi un numero compreso tra 1 e 5")
    } else {
        //generazione numero ia 
        generatedNumber.value = IaGenerate(1, 5); 
        let iaGenNumb = parseInt(generatedNumber.value);

        console.log("*********** ia gen ************");
        console.log(iaGenNumb);
        generatedNumber.innerHTML = iaGenNumb;

        //somma
        console.log("***********somma*********");
        sum = userNumberInput + iaGenNumb;
        console.log(sum);
        //Funzione per verificare se il numero è pari o dispari
        checkNumber(sum);
        if (selection.value === "pari" && checkNumber(sum) === true) {
            winner.innerHTML = `La somma è ${sum} HAI VINTO!!!`;
        } else if (selection.value === "pari" && checkNumber(sum)=== false) {
            winner.innerHTML = `La somma è ${sum} HAI PERSO, RITENTA!!!`;
        } else if (selection === "dispari" && checkNumber(sum)=== false) {
            winner.innerHTML = `La somma è ${sum} HAI VINTO!!!`;
        } else if (selection === "dispari" && checkNumber(sum)=== true) {
            winner.innerHTML = `La somma è ${sum} HAI PERSO, RITENTA!!!`;
        }
        
        
        
    }
    
    




})  






/**
 * 
 * @param {number} min;
 * @param {number} max;
 * @returns {number};
 */
function IaGenerate(min, max){
    const randomNumber = Math.floor((Math.random() * max) + min);
    return randomNumber;   
} 

function checkNumber (num) {
    if( num % 2 === 0){
        return true;
    } else {
        return false;
    }
}