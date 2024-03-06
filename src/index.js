import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textField = document.getElementById("textInput");
textField.addEventListener("input", () => {

  // CALCULA USANDO LAS FUNCIONES

  // obten texto de entrada
  const text = document.getElementById("textInput").value;
  // console.log("txt: ", text)

  // 1. CONTEO DE PALABRAS
  const numofWords = analyzer.getWordCount(text);
  // console.log("--", numofWords)
  
  // 2. Conteo de caracteres
  const numofCharacters = analyzer.getCharacterCount(text);
  // console.log("numofCharacters", numofCharacters)

  // 3. ....getCharacterCountExcludingSpaces
  const numofCharactersExcludingSpace = analyzer.getCharacterCountExcludingSpaces(text);
  // console.log("numofCharacters", numofCharactersExcludingSpace)

  // 4 ... getAverageWordLength
  const averageWordLength = analyzer.getAverageWordLength(text);
  // console.log("numofaverageWordLength", averageWordLength)

  // 5... get number count
  const numberCount = analyzer.getNumberCount(text);
  // console.log("numofnumberCount", numberCount)

  // getnumberSum
  const numberSum = analyzer.getNumberSum(text);
  // console.log("numofnumberSum", numberSum)

  // --- SETEA RESULTADOS EN ELEMENTOS HTML PARA MOSTRAR ----
  
  // 1. Setea conteo de palabras
  const numberofWords = document.getElementById("numberofWords");
  numberofWords.textContent = numofWords;

  // 2. Setea conteo de caracteres
  const numbfCharacters = document.getElementById("numofCharacters");
  numbfCharacters.textContent = numofCharacters;
  
  // 3. SETEA CONTEO DE CARACTERES SIN ESPACIO

  const numbfCharactersExcludingSpaces = document.getElementById("numofCharactersExcludingSpaces");
  numbfCharactersExcludingSpaces.textContent =  numofCharactersExcludingSpace;

  // 4. SETEA GETAVERAGE

  const numberofaverageWordLength = document.getElementById("numberofaverageWordlength");
  numberofaverageWordLength.textContent = averageWordLength;

  //5. setea numbercount

  const numberofnumbercount = document.getElementById("numberofnumbercount");
  numberofnumbercount.textContent = numberCount;


  // SETEA NUMBERSUM
  const numberofnumberSum = document.getElementById("numberofnumbersum");
  numberofnumberSum.textContent = numberSum;

})
