const assert = require('assert');
/*
By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, 
we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
This is called the 'Hamming distance'.
It is found by comparing two DNA strands and counting how many of the nucleotides are different 
from their equivalent in the other string.

GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
The Hamming distance between these two DNA strands is 7.
*/

const hamming = (adn1, adn2) => {
  const ncls = [...adn2];
  return [...adn1].filter((x, i) => (x !== ncls[i])).length;
}

const hammingFor = (adn1, adn2) => {
  let result = 0;
  for (let i = 0; i < adn1.length; i += 1) {
    if (adn1[i] !== adn2[i]) {
      result += 1;
    }
  }
  return result;
}

assert.equal(hamming('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'), 7);
assert.equal(hammingFor('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'), 7);