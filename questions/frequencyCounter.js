/* 
Count the frequency of a vowels in a given string. 
1. The function should take a string input and return an object with keys a,e,i,o,u
2. The value corresponding to each key should have the frequency of vowels that appear 
   in the string
3. In case numbers are passed it shoul throw an error with message "Invalid Input"
*/

const frequencyCounter = (str) => {
   if (typeof (str) === 'string' && str.length) {
      const vowelCount = {
         a: 0,
         e: 0,
         i: 0,
         o: 0,
         u: 0,
      }
      str = str.toLowerCase();
      for (let i = 0; i < str.length; i++) {
         let char = str[i];
         if (Object.keys(vowelCount).includes(char)) {
            vowelCount[char] += 1;
         }
      }

      return vowelCount;
   }
   else {
      throw new Error('Invalid Input');
   }
};

module.exports = frequencyCounter;
