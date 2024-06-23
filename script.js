const checkButton = document.getElementById("check-btn");
const inputString = document.getElementById("text-input");
const results = document.getElementById("result");

const checkPalindrome = (str) => {
  let toEx = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(toEx, "");
  let len = str.length;

  if (inputString.value === "") {
    alert("Please input a value");
    return;
  }

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return (result.innerHTML = `${inputString.value} is not a palindrome`);
    }
  }
  result.innerHTML = `${inputString.value} is a palindrome`;
};

checkButton.addEventListener("click", function () {
  checkPalindrome(inputString.value);
});

/*  still working on this */
inputString.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(inputString.value);
  }
});
