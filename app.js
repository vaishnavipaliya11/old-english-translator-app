var btnTranslate = document.querySelector("#btn-translate")
var input = document.querySelector("#txt-input")
var outputDiv =  document.querySelector(".output")

function clickHandler() {
  console.log("clicked");
  var userInput = input.value;
  console.log(userInput)
  outputDiv.innerText= "hello"
}

btnTranslate.addEventListener("click",clickHandler)
