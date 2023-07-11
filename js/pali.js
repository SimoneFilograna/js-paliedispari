const btn = document.getElementById("btn");
const userInput= document.getElementById("my-word");
const resultTest = document.getElementById("result");


btn.addEventListener("click", function () {
    const word = userInput.value;
    console.log(word);
    if (checkWord(word) === true) {
        resultTest.innerHTML = "COMPLIMENTI LA PAROLA E' PALINDROMA"
    } else {
        resultTest.innerHTML = "MI SPIACE LA PAROLA NON E' PALINDROMA"
    }
}
)





/**
 * 
 * @param {boolean} casualWord ;
 * @returns {boolean};
 */
function checkWord(casualWord) {
    const newWord = casualWord.split("");
    console.log(newWord);
    let reverseArray = newWord.reverse();
    console.log(reverseArray);
    newReverseWord = reverseArray.join("");
    if (casualWord === newReverseWord) {
        return true;
    } else {
        return false;
    }
} 



