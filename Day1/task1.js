function numbersThenLetters(arr) {
    // Helper function to check if a value is a number
    function isNumber(value) {
      return typeof value === 'number' && isFinite(value);
    }
  
    // Sort function for numbers and letters
    function sortFunction(a, b) {
      if (isNumber(a) && isNumber(b)) {
        return a - b; // Sort numbers in ascending order
      } else if (!isNumber(a) && !isNumber(b)) {
        return a.localeCompare(b); // Sort letters in ascending order
      } else if (isNumber(a)) {
        return -1; // Numbers come before letters
      } else {
        return 1; // Letters come after numbers
      }
    }
  
    // Sort the array using the custom sort function
    return arr.sort(sortFunction);
  }
  
  // Example usage:
  var example = [11, 12, 24, 23, "a", "b", 56, "c", 45, 67, "d", "f", "e", 78];
  var sortedArray = numbersThenLetters(example);
  console.log(sortedArray);