const formatString = function (string) {
    if(string.length<=40){
        return(string);
    } else {
        let newStr = string.slice(0, 41);
        return newStr+'...';
    }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);