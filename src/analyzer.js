const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    const words = text.split(" ");
    const filteredWords = words.filter(word => word !== '');
    return filteredWords.length;

  },

  // TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    // Obtener el contenido del textarea
    //  const text = document.getElementById('textInput').value;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let contador = 0;
    for (let i = 0; i < text.length; i++) {
      contador += 1
    }
    return contador;
  },


  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    let contador = 0;
    let code;
    for (let i = 0; i < text.length; i++) {
      code = text.charCodeAt(i);
      if ((code > 47 && code < 58) ||// numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
        contador += 1
      }
    }

    return contador;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const txt = text.trim(); // trim remueve espacios del inicio y final del texto
    const words = txt.split(" "); // divide usando los espacios, crea un array palabras

    let longs = 0;   // guarda longitud de cada palabra total
    // va palabra por palabra y suma las logitudes de cada una
    words.forEach(function (word) {
      longs = longs + word.length

    })
    // promedio de longitudes
    return Number((longs / words.length).toFixed(2)); // solo 2 decimales
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // 
    // usa bucle for para ir letra por letra
    const txt = text.trim(); // trim remueve espacios del inicio y final del texto
    const words = txt.split(" "); //

    let count = 0; // usado para contar caracteres numericos

    words.forEach(function (word) { // va tras cada caracter
      // Check if the character is a digit
      if (word.match(/^-?\d+$/) || word.match(/^\d+\.\d+$/)) { // regex expresion para comparacion estricta para numero enteros y decimales(limitante)
        // no hace nada
        console.log("--", word)
        count++;
      }
    })

    return count;
  },

  getNumberSum: (text) => {


    function containsOnlyNumbers(word) {
      for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if ((code > 47 && code < 58) || (code === 46)) {
          continue 
        } else {
          return false;
        }
      } containsOnlyNumbers
      return true
    }

    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let count = 0; // usado para contar caracteres numericos
    const txt = text.trim(); // trim remueve espacios del inicio y final del texto
    const words = txt.split(" "); // crea arreglo de palabras


    for (let i = 0; i < words.length; i++) { // va tras cada caracter
      // Check if the character is a digit
      if (!isNaN(parseFloat(words[i])) && containsOnlyNumbers(words[i])) { // !isNaN verifica si es un numero valido
        console.log("is number", words[i])
        count += parseFloat(words[i])
      }
    }
    return count;
    // --------- set de caracteres permitidos para un numero ----- 
    //const set =  {} 
    //set["1"] = true
    //set["2"] = true
    //set["3"] = true
    //set["4"] = true
    //set["5"] = true
    //set["6"] = true
    //set["7"] = true
    //set["8"] = true
    //set["9"] = true
    //set["0"] = true
    //set["."] = true

    //function isNumber(word) {
    // para cada letra en una palabra
    //for(const char of word) {   
    // si la palabra no se halla en el set, retorna falso
    //if (!set[char]) return false
    //}//
    //return true
    //} 

    //const txt = text.trim(); // trim remueve espacios del inicio y final del texto
    //const words = txt.split(" "); // crea arreglo de palabras

    //let count = 0;  // acumula la suma de numeros 

    // bucle foreach para recorrer cada palabra
    //words.forEach(function (word) { 
    //if (isNumber(word)) {
    //count += parseFloat(word)
    //}
    //})

    //return count;
  }
}
//document.getElementById("myForm").reset();  


export default analyzer;