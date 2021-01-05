// Variables declarations and DOM elements selection.
var inputEl = document.querySelector("#input");
var outputEl = document.querySelector("#result");
var buttonEl = document.querySelector("#button");

// Add click listener to button
buttonEl.addEventListener("click", function () {
  // split input values on paces and store in an array.
  inputArray = inputEl.value.split(" ");
  // get results and assign to output element
  var result = getLongestWord(inputArray);
  outputEl.innerText = result;
});

// Function getLongestWord declaration
function getLongestWord(arr) {
  var maxLength = 0;
  var result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      result = arr[i];
    }
  }
  // return the result which contains the longest word
  return result;
}