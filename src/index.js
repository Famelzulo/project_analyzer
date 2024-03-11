import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textField = document.querySelector(`textarea[name ="user-input"]`);
textField.addEventListener("input", () => {

  // CALCULA USANDO LAS FUNCIONES

  // obten texto de entrada
  //const text = document.getElementById("textInput").value;
  // console.log("txt: ", text)

  // 1. CONTEO DE PALABRAS
  const numofWords = analyzer.getWordCount(textField.value);
  // console.log("--", numofWords)
  
  // 2. Conteo de caracteres
  const numofCharacters = analyzer.getCharacterCount(textField.value);
  // console.log("numofCharacters", numofCharacters)

  // 3. ....getCharacterCountExcludingSpaces
  const numofCharactersExcludingSpace = analyzer.getCharacterCountExcludingSpaces(textField.value);
  // console.log("numofCharacters", numofCharactersExcludingSpace)

  // 4 ... getAverageWordLength
  const averageWordLength = analyzer.getAverageWordLength(textField.value);
  // console.log("numofaverageWordLength", averageWordLength)

  // 5... get number count
  const numberCount = analyzer.getNumberCount(textField.value);
  // console.log("numofnumberCount", numberCount)

  // getnumberSum
  const numberSum = analyzer.getNumberSum(textField.value);
  // console.log("numofnumberSum", numberSum)

  // --- SETEA RESULTADOS EN ELEMENTOS HTML PARA MOSTRAR ----
  
  // 1. Setea conteo de palabras//15555
  const numberofWords = document.querySelector("numberofWords");
  numberofWords.textContent = "Number of words:" + numofWords;

  // 2. Setea conteo de caracteres
  const numbfCharacters = document.querySelector("numofCharacters");
  numbfCharacters.textContent = "Number of Characters: " + numofCharacters;
  
  // 3. SETEA CONTEO DE CARACTERES SIN ESPACIO

  const numbfCharactersExcludingSpaces = document.querySelector("numofCharactersExcludingSpaces");
  numbfCharactersExcludingSpaces.textContent = "Number of Characters Excluding Spaces : " + numofCharactersExcludingSpace;

  // 4. SETEA GETAVERAGE

  const numberofaverageWordLength = document.querySelector("numberofaverageWordlength");
  numberofaverageWordLength.textContent = "Average Word Length :" + averageWordLength;

  //5. setea numbercount

  const numberofnumbercount = document.querySelector("numberofnumbercount");
  numberofnumbercount.textContent = "Number Count :" + numberCount;


  // SETEA NUMBERSUM
  const numberofnumberSum = document.querySelector("numberofnumbersum");
  numberofnumberSum.textContent = "Number Sum :" + numberSum;

})

function reset () {

  textField.value = "";
}

document.getElementById("reset-button").addEventListener("click",reset,false)