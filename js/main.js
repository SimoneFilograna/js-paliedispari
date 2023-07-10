let generatedNumber = document.getElementById("ia-number");
const btn = document.getElementById("roll-button");
const userInput = document.getElementById("user-number");
let Sum= 0


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
