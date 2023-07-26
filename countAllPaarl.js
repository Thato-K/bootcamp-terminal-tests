module.exports = function countAllPaarl(regNumbers){
  var regNumbersList = regNumbers.split(',');
  var regNumbersForPaarl = [];
  
  for(let i=0; i<regNumbersList.length; i++){
    var regNoremovedSpaces = regNumbersList[i].trim();
    if(regNoremovedSpaces.startsWith('CJ')){
      regNumbersForPaarl.push(regNoremovedSpaces);
    }
  }
  return regNumbersForPaarl;
}


// function greet(name){
//     return ('Hello, ' + name)  
// }

// function longestWord(sentence){
//     var splittedSentence = sentence.split(' ');
//     var longestWord = 0;
//     var longest; 
    
//     for(let i=0; i<splittedSentence.length; i++){
//       var trimmedListofWords = splittedSentence[i].trim();
//       if(trimmedListofWords.length>longestWord){
//         longestWord = trimmedListofWords.length;
//         longest = trimmedListofWords;
//       }
       
//     }
//     return longest;
//   }
//   console.log(longestWord('The dog jumped over the shipyard fence'));
  
//   function shortestWord(sentence){
//       var splittedSentence = sentence.split(' ');
//       var shortestWord = 0;
//       var shortest;
      
//       for(let i=0; i<splittedSentence.length; i++){
//           var trimmedListOfWords = splittedSentence[i].trim();
//           if(trimmedListOfWords.length<shortestWord){
//               shortestWord = trimmedListOfWords.length;
//               shortest = trimmedListOfWords;
//           }
//       }
//       return shortest;
//   }
//   console.log(shortestWord('The dog jumped over the shipyard fence'));