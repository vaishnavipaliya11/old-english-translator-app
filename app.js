var btnTranslate = document.querySelector("#btn-translate")
var input = document.querySelector("#txt-input")
var outputDiv =  document.querySelector(".output")

var url ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function setUrl(text){
  return url +"?"+"text="+text
}

function clickHandler(userInput) {
  var userInput = input.value

fetch(setUrl(userInput))
.then(response=> response.json())
.then(json => console.log(json)) 
}

btnTranslate.addEventListener("click",clickHandler)
