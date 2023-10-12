const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; //Getting random object from words
    let wordArray = randomObj.word.split(""); //Splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //Getting random number
        //Shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] =  [wordArray[j], wordArray[i]]      
    }
    wordText.innerText = wordArray.join(""); //passing shuffled word as word text
    hintText.innerText = randomObj.hint; //passing random object hint as hint text
    correctWord = randomObj.word.toLowerCase(); // passing random word to correctWord
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length); //setting input maxlength attribute value to word length
    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase(); //getting user value
    if(!userWord) return alert(`Please enter a word to check`); //If user didn't enter anything

    //If user word does not match with the currect word
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not currect word`);

    //If above conditions are failed then show below sentence, i.e. if user word match with the currect word
    alert(`Congrats! ${userWord.toUpperCase()} is a currect word`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);