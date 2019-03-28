/*
  Ecrire une fonction qui prend en paramètre une chaîne de caractère
  et qui retourne une nouvelle chaîne de caractère en respectant les règles suivantes :
  - chaque lettre est dupliquée n fois (n représentant sa position dans la chaîne de caractère)
  - chaque "groupe" de lettres est séparé par un "-"

  Ex : 
  Input : "abcd"
  Output : "a-bb-ccc-dddd"

  Input : "bonjour"
  Output : "b-oo-nnn-jjjj-ooooo-uuuuuu-rrrrrrr"
*/

const accumHeavy = function(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    for (let j = 0; j < (i+1); j += 1) {
      result += char.toLowerCase();
    }
    result += '-';
  }
  result = result.slice(0, -1);
  return result;
}

const accumLight = str => str.split('').map((x, i) => x.repeat(i + 1)).join("-");

console.log(accumHeavy('bonjour'));
console.log(accumLight('bonjour'));
