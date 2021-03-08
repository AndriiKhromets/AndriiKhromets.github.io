const findLongestWord = function (string) {
  let newArr = string.split(" ");
  console.log(newArr);
  let longestWordIndex = 0;
  for(let i = 0; i<newArr.length; i++){
    if(newArr[longestWordIndex].length > newArr[i].length){

    }else {
      longestWordIndex = i;
    }
  }
  return longestWordIndex;
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'