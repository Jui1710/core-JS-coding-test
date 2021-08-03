const rotateString = (str, n, direction) => {
  // str = input string
  // n = number of rotations
  //
  // input str = random ,1, right
  // output mrando
  if ((typeof (str) === 'string') && (typeof (n) === 'number') && (n >= 0)) {

    if (direction === 'left') {
      return str.substring(n) + str.substring(0, n);
    }
    else if (direction === 'right') {
      let reversestring = str.split("").reverse().join("");

      return reversestring.substring(0, n) + str.substring(0, str.length - n);
    } else {
      throw new Error("Invalid Direction");
    }


  }
  else {
    throw new Error("Invalid Input");
  }
};

module.exports = rotateString;
