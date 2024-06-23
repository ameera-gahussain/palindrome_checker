const checkButton = document.getElementById("check-btn");
const inputString = document.getElementById("text-input");
const results = document.getElementById("result");

const checkPalindrome = (str) => {
  let toEx = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(toEx, "");
  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

checkButton.addEventListener("click", function () {
  if (inputString.value === "") {
    alert("Please input a value");
    return;
  }
  if (checkPalindrome(inputString.value) === false) {
    result.innerHTML = `${inputString.value} is not a palindrome`;
  } else {
    result.innerHTML = `${inputString.value} is a palindrome`;
  }
});

/*  still working on this
checkButton.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});
*/
