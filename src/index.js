/**
 * Method counts the length of the longest consecutive elements sequence.
 * The solution was borrowed from https://www.geeksforgeeks.org/longest-consecutive-subsequence/
 * 
 * @param  array unsorted array of integers.
 * @returns length of the longest consecutive elements sequence.
 */
module.exports = function longestConsecutiveLength(array) {
  var set = new Set();
  var result = 0;

  for(var i = 0; i < array.length; i++) {
    set.add(array[i]);
  }

  // check each possible sequence from the start
  // then update optimal length
  for(var i = 0; i < array.length; i++) {

    // if current element is the starting
    // element of a sequence
    if(!set.has(array[i] - 1)) {
      // Then check for next elements in the sequence
      var j = array[i];
      while(set.has(j)) {
        j++;
      }

      // update  optimal length
      if(result < j - array[i]) {
        result = j - array[i];
      }
    }
  }

  return result;
}
