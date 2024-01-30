document.querySelector(".btn").onclick = function display(e) {
  const inputArray = getData(e);
  console.log(inputArray);
  let result = "";
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "") {
      alert("Please Try Again! EMPTY CHOICE!");
      inputArray.pop("");
    } else {
      result += `<li><input type="checkbox" class="checkbox">
    <span>${inputArray[i]}</span></li>`;
      document.querySelector("ul").innerHTML = result;
    }
  }
  addLine();
};

const inputArray = [];
function getData(e) {
  e.preventDefault();
  const inputData = document.querySelector(".listInput").value;
  inputArray.push(inputData);
  return inputArray;
}

function addLine() {
  const check = document.querySelectorAll(".checkbox");
  for (let i = 0; i < check.length; i++) {
    console.log(check[i]);
    check[i].onclick = function getCheckBox(e) {
      let nextSibling = check[i].nextElementSibling;
      console.log(nextSibling);
      nextSibling.classList.toggle("checked");
    }
  }
}
