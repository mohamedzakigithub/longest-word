// Variables declarations and DOM elements selection.
const inputEl = document.querySelector("#input");
const outputEl = document.querySelector("#result");
const buttonEl = document.querySelector("#button");

// Add click listener to button
buttonEl.addEventListener("click", function () {
  // remove non word special characters and split input values on paces and store in an array.
  const inputArray = inputEl.value.replace(/[^a-zA-Z\s]/g, "").split(" ");
  // get results and assign to output element
  const result = getLongestWord(inputArray);
  outputEl.innerText = result;
});

// Function getLongestWord declaration
function getLongestWord(arr) {
  let maxLength = 0;
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
      result = arr[i];
    }
  }
  // return the result which contains the longest word
  return result;
}
