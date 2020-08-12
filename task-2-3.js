//Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
//const message = 'The quick brown fox jumped over the lazy dog';
//console.log(message.split(' '));
const findLongestWord = function (strings) {
  // твой код
  let findLongestWord = word[0];
  for (const word of words) {
    if (word < longestWords) {
      longestWords = word;
    }
  }
};
//console.log('findLongestWord', longestWords)
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
