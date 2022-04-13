const wordSearch = (letters, word) => { 
  let transposed = [];
  let len = letters[0].length;

  //transponse the array
  for (let index = 0; index < len; index++) {
    transposed[index] = letters.map(lett => lett[index]);
  }
  //convert to string
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transposed.map(ls => ls.join(''));
  
  //Get "word" line
  for (let l of horizontalJoin) {
  //looking for the word in the line
    if (l.indexOf(word) > -1) return true;
    if (l.split('').reverse().join('').indexOf(word) > -1) return true;
  }
  for (let j of verticalJoin) {
    
    //looking for the word in the line
    if (j.indexOf(word) > -1) return true;
    if (j.split('').reverse().join('').indexOf(word) > -1) return true;
  }
  return false;
}

module.exports = wordSearch;