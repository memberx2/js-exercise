function stringTransformer (input) {
  var inputToUppercase = input.toUpperCase();
  var output = "";
  for (var i=0; i<input.length; i++) {
    if ( input[i] == inputToUppercase[i] ) {
      output += input[i].toLowerCase();
    } else {
      output += input[i].toUpperCase();
    }
  }
  return output.split(' ').reverse().join(' ');

}

console.log(stringTransformer("Example Input"));