const checkStringLength = (string, maxLength) => string.length <= maxLength;

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false


function palindrom(newString) {
  newString = newString.toLowerCase();
  newString = newString.replaceAll(' ','');

  let reversed = '';

  for (let i = newString.length - 1; i >= 0; i--) {
    reversed = reversed + newString[i];
  }

  return newString === reversed;

}
// Строка является палиндромом
palindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
palindrom('ДовОд'); // true
// Это не палиндром
palindrom('Кекс'); // false
