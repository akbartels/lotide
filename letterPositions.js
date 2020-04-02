const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};


const assertArraysEqual = function(array1, array2) {
  let compareArray = eqArrays(array1, array2);
  
  if (compareArray) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed: ${array1} !==  ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    // console.log(i, sentence[i], results[sentence[i]], results[i])
    // results[sentence[i]].push(i)
    // console.log(results.h)
    
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        // console.log(sentence[i], "exists")
        results[sentence[i]].push(i);
      } else {
        // console.log(sentence[i], "does not exist")
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello there"));

assertArraysEqual(letterPositions("hello").e, [1]);