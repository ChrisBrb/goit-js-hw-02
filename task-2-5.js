//Функция предикат возвращает true или false

//Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
function checkForSpam (str) { 
   // 'use strict';
    // Write code under this line
    const strict = str.toLowerCase();
    let message = false;
    for (let i = 0; i < strict.length; i += 1) {
        if (strict.includes("sale")) {
            message = true;
        } else if (strict.includes('spam')) {
            message = true;
        }
    }  
    return message;
  }
  
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true